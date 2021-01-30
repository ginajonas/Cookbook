const router = require('express').Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')
const axios = require('axios')

router.post('/api/recipe', (req, res) => {
  Recipe.create({ ...req.body, user: req.session.user._id })
    .then((dbRecipe) => {
      res.json(dbRecipe)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

router.get('/api/recipe', (req, res) => {
  Recipe.find({})
    .sort({ createdAt: 'desc' })
    .populate('user')
    .then((dbRecipe) => {
      res.json(dbRecipe)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})
router.post('/api/signup', (req, res) => {
  User.create(req.body)
    .then((user) => {
      req.session.user = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        _id: user._id,
      }
      res.json(user)
    })
    .catch((err) => {
      if (err.code === 11000) {
        res.status(400).json({ message: 'Email is already in use' })
      } else {
        res.status(400).json(err)
      }
    })
})
router.post('/api/login', (req, res) => {
  User.findOne({ email: req.body.email.toLowerCase() }, function (err, user) {
    if (err) throw err
    if (user !== null) {
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (!isMatch) {
          res.status(400).json({ message: 'Password or user incorrect' })
        } else {
          req.session.user = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            _id: user._id,
          }
          res.json(user)
        }
      })
    } else {
      res.status(400).json({ message: 'Password or user incorrect' })
    }
  }).catch((err) => {
    res.status(400).json({ message: 'Password or user incorrect' })
  })
})

router.get('/api/logout', (req, res) => {
  if (req.session) {
    req.session.destroy()
  }
  res.json({ status: 'success' })
})

router.get('/api/user', (req, res) => {
  const user = req.session.user
  if (req.session.user) {
    Recipe.find({ user: user._id }).count((err, count) => {
      req.session.user['recipeCount'] = count
      User.findOne({ _id: user._id }).then((user) => {
        req.session.user['likeCount'] = user.likedRecipes.length
        res.json(req.session.user)
      })
    })
  } else {
    res.status(404).json({})
  }
})

router.post('/api/likeRecipe', (req, res) => {
  const likedRecipeId = req.body.recipe
  const userId = req.session.user._id
  User.updateOne(
    { _id: userId },
    { $addToSet: { likedRecipes: likedRecipeId } }
  )
    .populate('likedRecipes')
    .then((db) => {
      res.json(db)
    })
    .catch((err) => {
      res.status(400)
    })
})

router.get('/api/likeRecipe', (req, res) => {
  const userId = req.session.user._id
  User.findOne({ _id: userId })
    .populate({
      path: 'likedRecipes',
      populate: { path: 'user', model: 'User' },
    })
    .then((user) => {
      res.json(user.likedRecipes.reverse())
    })
    .catch((err) => {
      res.status(400)
    })
})

router.get('/api/daily-recipe', (req, res) => {
  axios
    .get(
      'https://api.spoonacular.com/recipes/random?apiKey=fca9157baf184d688658c0aa5f74b4bd'
    )
    .then((response) => {
      res.json(response.data.recipes[0])
    })
    .catch((err) => {
      res.status(400)
    })
})

router.get('/api/my-recipe', (req, res) => {
  const userId = req.session.user._id
  Recipe.find({ user: userId })
    .sort({ createdAt: 'desc' })
    .populate('user')
    .then((dbRecipe) => {
      res.json(dbRecipe)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

module.exports = router

const router = require('express').Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')
const axios = require('axios')

function loggedIn(req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.status(401).json({ message: 'not logged in' })
  }
}

router.post('/api/recipe', loggedIn, (req, res) => {
  Recipe.create({ ...req.body, user: req.session.user._id })
    .then((dbRecipe) => {
      res.json(dbRecipe)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

router.get('/api/recipe', loggedIn, (req, res) => {
  Recipe.find({ $or: [{ hidden: { $exists: false } }, { hidden: false }] })
    .sort({ createdAt: 'desc' })
    .populate('user')
    .then((dbRecipe) => {
      res.json(dbRecipe)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

router.delete('/api/recipe/:id', loggedIn, (req, res) => {
  const id = req.params.id
  Recipe.deleteOne({ _id: id, user: req.session.user._id })
    .then((db) => {
      res.json(db)
    })
    .catch((err) => {
      res.status(400)
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
      // This means the user email is a duplicate
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
    // If the user exists, if user is null, that means the database came back with nothing, so user doesnt exist.
    if (user !== null) {
      user.comparePassword(req.body.password, function (err, isMatch) {
        // password is incorrect
        if (isMatch === false) {
          res.status(400).json({ message: 'Password or user incorrect' })
        } else {
          // password does match
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

router.get('/api/logout', loggedIn, (req, res) => {
  if (req.session) {
    req.session.destroy()
  }
  res.json({ status: 'success' })
})

router.get('/api/user', loggedIn, (req, res) => {
  const user = req.session.user
  // if session exists ie. user logged in.
  if (req.session.user) {
    // Find how many recipes the user posted
    Recipe.find({ user: user._id }).count((err, count) => {
      req.session.user['recipeCount'] = count
      // Find how many recipes the user liked
      User.findOne({ _id: user._id }).then((user) => {
        req.session.user['likeCount'] = user.likedRecipes.length
        res.json(req.session.user)
      })
    })
  } else {
    res.status(404).json({})
  }
})

router.post('/api/likeRecipe', loggedIn, (req, res) => {
  // who liked the recipe?
  const userId = req.session.user._id
  // Which recipe did they like
  const likedRecipeId = req.body.recipe
  // Update the logged in user, add the liked recipe id to the user's likedRecipes list
  User.updateOne(
    { _id: userId },
    { $addToSet: { likedRecipes: likedRecipeId } }
  )
    // likedRecipes is a list of  recipe objectIds, populate will replace the liked recipe's objectId with the recipe and its information
    .populate('likedRecipes')
    .then((db) => {
      res.json(db)
    })
    .catch((err) => {
      res.status(400)
    })
})

router.get('/api/likeRecipe', loggedIn, (req, res) => {
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

router.get('/api/daily-recipe', loggedIn, (req, res) => {
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

router.get('/api/my-recipe', loggedIn, (req, res) => {
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

const router = require('express').Router()
const Recipe = require('../models/recipe')
const User = require('../models/user')

router.post('/api/recipe', (req, res) => {
  Recipe.create(req.body)
    .then((dbRecipe) => {
      res.json(dbRecipe)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

router.get('/api/recipe', (req, res) => {
  Recipe.find({})
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
      req.session.user = user
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
  if (req.session.user) {
    res.json(req.session.user)
  } else {
    res.status(404).json({})
  }
})

module.exports = router

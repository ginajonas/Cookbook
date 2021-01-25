const router = require('express').Router()
const Recipes = require('../models/recipe')

router.post('/api/recipe', (req, res) => {
  Recipes.create(req.body)
    .then((dbRecipe) => {
      res.json(dbRecipe)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

router.get('/api/recipe', (req, res) => {
  Recipes.find({})
    .then((dbRecipe) => {
      res.json(dbRecipe)
    })
    .catch((err) => {
      res.status(400).json(err)
    })
})

module.exports = router

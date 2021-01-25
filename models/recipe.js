const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
  recipe: {
    type: String,
    required: true,
  },
})

const Recipes = mongoose.model('Recipes', recipeSchema)

module.exports = Recipes

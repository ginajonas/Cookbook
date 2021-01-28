const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
  recipe: {
    type: String,
    required: true,
  },
  // add extra fields
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
})

const Recipes = mongoose.model('Recipes', recipeSchema)

module.exports = Recipes

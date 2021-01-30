const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    // add extra fields
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
)

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe

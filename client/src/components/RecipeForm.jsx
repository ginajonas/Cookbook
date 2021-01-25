import { useState } from 'react'
import axios from 'axios'

export default function RecipeForm({ getRecipes }) {
  const [recipeValue, setRecipeValue] = useState('')

  const postRecipe = () => {
    axios.post('/api/recipe', { recipe: recipeValue }).then((response) => {
      getRecipes()
    })
  }

  return (
    <div className="w3-row-padding">
      <div className="w3-col m12">
        <div className="w3-card w3-round w3-white">
          <div className="w3-container w3-padding">
            <input
              value={recipeValue}
              onChange={(e) => setRecipeValue(e.target.value)}
              style={{ width: '100%' }}
              type="text"
              placeholder="Recipe: Make it delicious!"
              className="w3-border w3-padding"
            />
            <button
              onClick={postRecipe}
              type="button"
              className="w3-button w3-theme"
            >
              <i className="fa fa-pencil"></i> &nbsp;Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

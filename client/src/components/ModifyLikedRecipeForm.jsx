import { useEffect, useState } from 'react'
import axios from 'axios'
export default function ModifyLikedRecipeForm({
  title,
  instructions,
  ingredients,
  getRecipes,
}) {
  const [titleField, setTitle] = useState('')
  const [ingredientsField, setIngredients] = useState('')
  const [instructionsField, setInstructions] = useState('')

  useEffect(() => {
    setTitle(title)
    setIngredients(ingredients)
    setInstructions(instructions)
  }, [title, instructions, ingredients])

  const postRecipe = () => {
    axios
      .post('/api/recipe', {
        title: titleField,
        ingredients: ingredientsField,
        instructions: instructionsField,
      })
      .then((response) => {
        getRecipes()
        setTitle('')
        setIngredients('')
        setInstructions('')
      })
  }

  return (
    <div className="w3-row-padding">
      <div className="w3-col m12">
        <div className="w3-card w3-round w3-white">
          <div className="w3-container w3-padding">
            <input
              value={titleField}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: '100%' }}
              type="text"
              placeholder="Recipe: Make it delicious!"
              className="w3-border w3-padding"
            />
            <textarea
              value={ingredientsField}
              onChange={(e) => setIngredients(e.target.value)}
              rows={'5'}
              style={{ width: '100%' }}
              type="text"
              placeholder="Recipe: List of Ingredients!"
              className="w3-border w3-padding"
            />
            <textarea
              value={instructionsField}
              onChange={(e) => setInstructions(e.target.value)}
              rows={'5'}
              style={{ width: '100%' }}
              type="text"
              placeholder="Recipe: Instructions!"
              className="w3-border w3-padding"
            />
            <button
              onClick={postRecipe}
              type="button"
              className="w3-button w3-theme"
            >
              <i className="fa fa-pencil"></i> &nbsp;Modify
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

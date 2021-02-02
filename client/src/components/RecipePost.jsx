import axios from 'axios'

export default function RecipePost({
  title,
  instructions,
  ingredients,
  user,
  _id,
}) {
  const likeRecipe = (e) => {
    e.preventDefault()
    axios.post('/api/likeRecipe', { recipe: _id }).then((response) => {})
  }
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin post">
      <h4>
        Chef {user.firstName} {user.lastName}
      </h4>
      <br />
      <hr className="w3-clear" />
      <b>{title}</b>
      <p>Ingredients: {ingredients}</p>

      <p>Instructions: {instructions}</p>
      <button
        onClick={likeRecipe}
        type="button"
        className="w3-button w3-theme-d1 w3-margin-bottom"
      >
        <i className="fa fa-heart"></i> &nbsp;Like Recipe
      </button>
    </div>
  )
}

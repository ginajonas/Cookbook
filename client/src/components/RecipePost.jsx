import axios from 'axios'

export default function RecipePost({ recipe, user, _id }) {
  const likeRecipe = (e) => {
    e.preventDefault()
    axios.post('/api/likeRecipe', { recipe: _id }).then((response) => {})
  }
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin post">
      <br />
      <img
        src="/w3images/avatar5.png"
        alt="Avatar"
        className="w3-left w3-circle w3-margin-right"
      />
      <span className="w3-right w3-opacity">16 min</span>
      <h4>
        Chef {user.firstName} {user.lastName}
      </h4>
      <br />
      <hr className="w3-clear" />
      <p>{recipe}</p>
      <button
        onClick={likeRecipe}
        type="button"
        className="w3-button w3-theme-d1 w3-margin-bottom"
      >
        <i className="fa fa-book"></i> &nbsp;Like Recipe
      </button>
      <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom">
        <i className="fa fa-comment"></i> &nbsp;Comment
      </button>
    </div>
  )
}

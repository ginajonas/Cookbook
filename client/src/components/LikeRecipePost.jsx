export default function RecipePost({
  modifyRecipe,
  title,
  instructions,
  ingredients,
  user,
  _id,
}) {
  const modifyPost = () => {
    modifyRecipe({
      title: title,
      instructions: instructions,
      ingredients: ingredients,
    })
  }
  return (
    <div className="w3-container w3-card w3-white w3-round w3-margin post">
      <br />

      <h4>
        Chef {user.firstName} {user.lastName}
      </h4>
      <br />
      <hr className="w3-clear" />
      <b>{title}</b>
      <p>Ingredients: {ingredients}</p>

      <p>Instructions: {instructions}</p>
      <button
        onClick={modifyPost}
        type="button"
        className="w3-button w3-theme-d1 w3-margin-bottom"
      >
        <i className="fa fa-pencil"></i> &nbsp;Make It Your Own
      </button>
    </div>
  )
}

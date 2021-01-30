import axios from 'axios'
import { useEffect, useState } from 'react'

function DailyRecipe() {
  const [recipe, setRecipe] = useState({})
  const [apiDone, setApiDone] = useState(false)
  const getDailyRecipe = () => {
    axios
      .get('/api/daily-recipe')
      .then((response) => {
        setRecipe(response.data)
        setApiDone(true)
      })
      .catch((err) => {
        setApiDone(true)
      })
  }

  useEffect(() => {
    if (apiDone === false) {
      getDailyRecipe()
    }
  })

  if (recipe === false) {
    return <></>
  }
  return (
    <div className="w3-container">
      <p>Featured Recipe:</p>
      <img src={recipe.image} className="daily-recipe-img" alt="Forest" />
      <p>
        <strong>{recipe.title}</strong>
      </p>
      <p>
        <a
          href={recipe.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="w3-button w3-block w3-theme-l4"
        >
          Info
        </a>
      </p>
    </div>
  )
}
export default DailyRecipe
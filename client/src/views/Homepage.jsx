import { useEffect, useState } from 'react'
import axios from 'axios'

import ProfileCard from '../components/ProfileCard'
import NavBar from '../components/NavBar'
import Accordion from '../components/Accordion'
import RecipeForm from '../components/RecipeForm'
import RecipePost from '../components/RecipePost'
import DailyRecipe from '../components/DailyRecipe'

export default function HomePage() {
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    if (recipes === null) {
      getRecipes()
    }
  }, [recipes])

  const getRecipes = () => {
    axios.get('/api/recipe').then((response) => {
      setRecipes(response.data)
    })
  }

  if (recipes === null) {
    return <></>
  }
  return (
    <>
      <NavBar />
      <div className="w3-container w3-content page-content">
        <div className="w3-row">
          <div className="w3-col m3">
            <ProfileCard />
            <Accordion />
          </div>
          <div className="w3-col m7">
            <RecipeForm getRecipes={getRecipes} />
            {recipes &&
              recipes.map((recipe) => (
                <RecipePost key={recipe._id} {...recipe} />
              ))}
          </div>
          <div className="w3-col m2">
            <DailyRecipe />
          </div>
        </div>
      </div>
    </>
  )
}

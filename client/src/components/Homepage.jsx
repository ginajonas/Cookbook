import ProfileCard from './ProfileCard'
import NavBar from './NavBar'
import Accordion from './Accordion'
import RecipeForm from './RecipeForm'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RecipePost from './RecipePost'

export default function HomePage() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes()
  })

  const getRecipes = () => {
    axios.get('/api/recipe').then((response) => {
      setRecipes(response.data)
    })
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
            {recipes.map((recipe) => (
              <RecipePost {...recipe} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

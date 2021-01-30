import { useEffect, useState } from 'react'
import axios from 'axios'

import ProfileCard from '../components/ProfileCard'
import NavBar from '../components/NavBar'
import Accordion from '../components/Accordion'

import LikeRecipePost from '../components/LikeRecipePost'
import ModifyLikedRecipeForm from '../components/ModifyLikedRecipeForm'
export default function LikeRecipe() {
  const [recipes, setRecipes] = useState(null)
  const [recipeToBeModified, setRecipeToBeModified] = useState({
    title: '',
    instructions: '',
    ingredients: '',
  })
  useEffect(() => {
    if (recipes === null) {
      getLikedRecipes()
    }
  })

  const getLikedRecipes = () => {
    axios.get('/api/likeRecipe').then((response) => {
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
            <ModifyLikedRecipeForm
              getRecipes={getLikedRecipes}
              {...recipeToBeModified}
            />
            {recipes &&
              recipes
                .reverse()
                .map((likerecipe) => (
                  <LikeRecipePost
                    modifyRecipe={setRecipeToBeModified}
                    key={likerecipe._id}
                    {...likerecipe}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  )
}

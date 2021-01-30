import UserContext from '../utils/UserContext'
import { useContext } from 'react'
function ProfileCard() {
  const { firstName, lastName, likeCount, recipeCount } = useContext(
    UserContext
  )

  return (
    <div className="w3-card w3-round w3-white">
      <div className="w3-container">
        <h4 className="w3-center"> Chef {firstName + ' ' + lastName}</h4>
        <p className="w3-center"></p>
        <hr />
        <p>
          <i className="fa fa-heart fa-fw w3-margin-right w3-text-theme"></i>{' '}
          Liked Recipes: {likeCount}
        </p>
        <p>
          <i className="fa fa-book fa-fw w3-margin-right w3-text-theme"></i>{' '}
          Posted Recipes: {recipeCount}
        </p>
      </div>
    </div>
  )
}
export default ProfileCard

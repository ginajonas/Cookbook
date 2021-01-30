import { Link } from 'react-router-dom'

export default function Accordion() {
  return (
    <div className="w3-card w3-round">
      <div className="w3-white">
        <Link to="/liked-recipes">
          <button className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-heart fa-fw w3-margin-right"></i> My Liked
            Recipes
          </button>
        </Link>
        <Link to="/my-cook-book">
          <button className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-book fa-fw w3-margin-right"></i> My Cook Book
          </button>
        </Link>
        <Link to="/">
          <button className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-cutlery fa-fw w3-margin-right"></i> Public Cook
            Book
          </button>
        </Link>
      </div>
    </div>
  )
}

import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false)
  // We assign a onclick to the logout button to run the logOut function when it is clicked. The logout function will run an api call to /api/logout to destroy the session.
  const logOut = (e) => {
    e.preventDefault()
    axios.get('/api/logout').then((response) => {
      // redirect to the login page once logout is successful
      window.location.href = '#/login'
    })
  }

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          <Link
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            to="/"
            onClick={() => setNavOpen(!navOpen)}
          >
            <i className="fa fa-bars"></i>
          </Link>
          <Link
            to="/"
            className="w3-bar-item w3-button w3-padding-large w3-theme-d4"
          >
            <i className="fa fa-home w3-margin-right"></i>Cookbook
          </Link>
          <Link
            to="/"
            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            title="Home"
          >
            <i className="fa fa-cutlery"></i>
          </Link>
          <Link
            to="/liked-recipes"
            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            title="My Liked Recipes"
          >
            <i className="fa fa-heart"></i>
          </Link>
          <Link
            to="/my-cook-book"
            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            title="My Cook Book"
          >
            <i className="fa fa-book"></i>
          </Link>
          <Link
            to="/"
            onClick={logOut}
            className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
            title="My Account"
          >
            Log Out
          </Link>
        </div>
      </div>

      <div
        id="navDemo"
        className={
          'w3-bar-block w3-theme-d2 w3-large' +
          (navOpen ? '' : ' w3-hide w3-hide-large w3-hide-medium')
        }
      >
        <Link
          to="/"
          className="w3-bar-item w3-button w3-padding-large"
          title="Home"
        >
          <i className="fa fa-cutlery"></i>
        </Link>
        <Link
          to="/liked-recipes"
          className="w3-bar-item w3-button w3-padding-large"
          title="My Liked Recipes"
        >
          <i className="fa fa-heart"></i>
        </Link>
        <Link
          to="/my-cook-book"
          className="w3-bar-item w3-button w3-padding-large"
          title="My Cook Book"
        >
          <i className="fa fa-book"></i>
        </Link>
        <Link
          to="/"
          onClick={logOut}
          className="w3-bar-item w3-button w3-padding-large"
          title="My Account"
        >
          Log Out
        </Link>
      </div>
    </>
  )
}

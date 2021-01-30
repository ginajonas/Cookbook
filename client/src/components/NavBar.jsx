import axios from 'axios'

export default function NavBar() {
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
          <a
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            href="/"
          >
            <i className="fa fa-cutlery"></i>
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-padding-large w3-theme-d4"
          >
            <i className="fa fa-home w3-margin-right"></i>Cookbook
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            title="News"
          >
            <i className="fa fa-fa fa-cutlery"></i>
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            title="Account Settings"
          >
            <i className="fa fa-spoon"></i>
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            title=""
          >
            <i className="fa fa-book"></i>
          </a>
          <a
            href="/"
            onClick={logOut}
            className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
            title="My Account"
          >
            Log Out
          </a>
        </div>
      </div>

      <div
        id="navDemo"
        className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large"
      >
        <a href="/" className="w3-bar-item w3-button w3-padding-large">
          Link 1
        </a>
        <a href="/" className="w3-bar-item w3-button w3-padding-large">
          Link 2
        </a>
        <a href="/" className="w3-bar-item w3-button w3-padding-large">
          Link 3
        </a>
        <a href="/" className="w3-bar-item w3-button w3-padding-large">
          My Profile
        </a>
      </div>
    </>
  )
}

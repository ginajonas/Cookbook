export default function SignUpNavBar() {
  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          <a
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            href="/"
            onclick="openNav()"
          >
            <i className="fa fa-bars"></i>
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-padding-large w3-theme-d4"
          >
            <i className="fa fa-book w3-margin-right"></i>CookBook
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

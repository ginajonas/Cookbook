export default function SignUpNavBar() {
  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          <a
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            href="/"
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
    </>
  )
}

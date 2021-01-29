import { Link } from 'react-router-dom'

export default function Accordion() {
  return (
    <div className="w3-card w3-round">
      <div className="w3-white">
        <Link to="/liked-recipes">
          <button className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-spoon fa-fw w3-margin-right"></i> My Liked
            Recipes
          </button>
        </Link>
        <div id="Demo1" className="w3-hide w3-container">
          <p>Some text..</p>
        </div>
        <button
          onClick="myFunction('Demo2')"
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> My
          Events
        </button>
        <div id="Demo2" className="w3-hide w3-container">
          <p>Some other text..</p>
        </div>
        <button
          onClick="myFunction('Demo3')"
          className="w3-button w3-block w3-theme-l1 w3-left-align"
        >
          <i className="fa fa-users fa-fw w3-margin-right"></i> My Photos
        </button>
        <div id="Demo3" className="w3-hide w3-container">
          <div className="w3-row-padding"></div>
        </div>
      </div>
    </div>
  )
}

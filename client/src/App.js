import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import SignUp from './components/SignUp'
import HomePage from './components/Homepage'
function App() {
  return (
    <Router>
      <Switch>
        <Route exat path="/signup">
          <SignUp />
        </Route>
        <Route exat path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Login from './views/Login'
import HomePage from './views/Homepage'
function App() {
  const [user, setUser] = useState({})
  const [sessionExists, setSessionExists] = useState(null)

  useEffect(() => {
    if (sessionExists === null) {
      getUser()
    }
  })

  const getUser = () => {
    axios
      .get('/api/user')
      .then((response) => {
        setUser(response.data)
        setSessionExists(true)
      })
      .catch((err) => {
        setSessionExists(false)
      })
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path={'/'}>
          {sessionExists !== false ? <HomePage /> : <Login />}
        </Route>
      </Switch>
    </Router>
  )
}

export default App

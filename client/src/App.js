import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import Login from './views/Login'
import HomePage from './views/Homepage'
import UserContext from './utils/UserContext'
import LikedRecipe from './views/LikedRecipe'
import MyCookBook from './views/MyCookBook'

function App() {
  const [user, setUser] = useState({})
  const [sessionExists, setSessionExists] = useState(null)

  useEffect(() => {
    if (sessionExists === null) {
      getUser()
    }
  }, [sessionExists])

  const getUser = () => {
    axios
      .get('/api/user')
      .then((response) => {
        setSessionExists(true)
        setUser(response.data)
      })
      .catch((err) => {
        setSessionExists(false)
      })
  }

  if (sessionExists === null) {
    return <></>
  } else {
    return (
      <UserContext.Provider value={user}>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path={'/'}>
              {sessionExists === false ? <Login /> : <HomePage />}
            </Route>
            <Route exact path={'/liked-recipes'}>
              {sessionExists === false ? <Login /> : <LikedRecipe />}
            </Route>
            <Route exact path={'/my-cook-book'}>
              {sessionExists === false ? <Login /> : <MyCookBook />}
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    )
  }
}

export default App

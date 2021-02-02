import React from 'react'
// Create the context and give it initial values
// This context is store the logged in user's information so that it is accessible by other components
const UserContext = React.createContext({
  firsName: '',
  lastName: '',
  email: '',
  _id: '',
})

export default UserContext

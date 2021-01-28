import React from 'react'
// Create the context and give it initial values
const UserContext = React.createContext({
  firsName: '',
  lastName: '',
  email: '',
  _id: '',
})

export default UserContext

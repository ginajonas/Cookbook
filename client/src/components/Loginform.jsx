import { useState } from 'react'
import axios from 'axios'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginSubmit = (e) => {
    e.preventDefault()
    axios
      .post('/api/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        window.location = '/'
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  return (
    <form onSubmit={loginSubmit}>
      <div className="container">
        <h1>Login</h1>
        <p>Please fill in this form to login.</p>
        <hr />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </div>
    </form>
  )
}
export default LoginForm

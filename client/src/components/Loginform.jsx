function LoginForm() {
  return (
    <form>
      <div className="container">
        <h1>Login</h1>
        <p>Please fill in this form to login.</p>
        <hr />
        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <button type="submit">Login</button>
      </div>
    </form>
  )
}
export default LoginForm

import SignUpNavBar from '../components/SignUpNavBar'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/Loginform'

function Login() {
  return (
    <>
      <SignUpNavBar />
      <div className="w3-container page-content w3-content">
        <div className="w3-row">
          <div className="w3-col m6">
            <SignUpForm />
          </div>
          <div className="w3-col m6">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

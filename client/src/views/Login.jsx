import SignUpNavBar from '../components/SignUpNavBar'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/Loginform'

function Login() {
  return (
    <>
      <SignUpNavBar />
      <div className="w3-container page-content w3-content">
        <div className="w3-row">
          <div className="w3-col m12">
            <h1 className="title">Cookbook</h1>
            <h4>
              So many things are learned from previous generations and yet so
              many are lost to history. When it comes to all the good and
              nutritious foods from our parents, grandparents and family members
              that we have grown accustom to should not be lost to history. This
              app will allow you to keep those precious recipes intact and learn
              new ones from others as you built your perfect recipe book.
            </h4>
          </div>
        </div>
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

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

  renderLoginPage = () => (
    <>
      <img
        src="https://res.cloudinary.com/dwj8ezxgi/image/upload/v1709719261/final_z8aw4t.jpg"
        alt="login"
        className="login-image"
      />
      <div>
        <h1>Hiiiiiii</h1>
      </div>
    </>
  )

  render() {
    return <div className="login-container">{this.renderLoginPage()}</div>
  }
}

export default LoginForm

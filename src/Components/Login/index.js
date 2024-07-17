import {Component} from 'react'
import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErr: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErr: true, errorMsg})
  }

  renderUserNameField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          value={username}
          id="username"
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    return (
      <>
        <label htmlFor="password">PASSWORD</label>
        <input
          type={inputType}
          id="password"
          value={password}
          name="password"
          onChange={this.onChangeHandler}
          placeholder="Password"
        />
        <input type="checkbox" id="checkbox" onChange={this.onShowPassword} />
        <label htmlFor="checkbox">Show Password</label>
      </>
    )
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const {userDetails} = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {errorMsg, showErr} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="app-container">
        <div className="form-container">
          <form className="form-ele" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              className="website light"
              alt="website logo"
            />
            <div>{this.renderUserNameField()}</div>
            <div>{this.renderPasswordField()}</div>

            <button type="submit" className="login-button">
              Login
            </button>
            {showErr && <p>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login

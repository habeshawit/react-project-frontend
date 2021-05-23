import React, { Component } from 'react';
import axios from 'axios'
import SignIn from '../registrations/SignIn'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      errors: ''
     };
  }

  componentDidMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password} = this.state

    let user = {
      username: username,
      email: email,
      password: password
    }
    
    axios.post('http://localhost:3001/api/v1/login', {user}, {withCredentials: true})
    .then(response => {
      // 
      if (response.data.logged_in) {
        this.props.handleLogin(response
          )
        
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => ('login api errors:', error))
  };

redirect = () => {
    this.props.history.push('/items')
  }

handleErrors = () => {
    return (
      <div>
        <ul>
        {this.state.errors.map(error => {alert(error)})
        }
        </ul>
      </div>
    )
  }
render() {
    const {username, email, password} = this.state
    return (
  
          <div>
            <SignIn username={username} email={email} password={password} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <div>
              {
                this.state.errors ? this.handleErrors() : null
              }
            </div>
          </div>
        );
  }
}
export default Login;
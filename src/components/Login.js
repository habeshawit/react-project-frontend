import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import SignIn from '../components/SignIn'



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
        {this.state.errors.map(error => {
        return <li key={error}>{error}</li>
          })
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
            {/* <h1>Log In</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
              <input
                placeholder="email"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <Button placeholder="submit" type="submit">
                Log In
              </Button>
              <div>
                or <Link to='/signup'>sign up</Link>
              </div>
              
              </form> */}
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
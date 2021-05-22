import React, { Component } from 'react';
import axios from 'axios'

class Logout extends Component {
  
  componentDidMount() {
    return this.props.loggedInStatus ? this.logout : null
  }

  logout = () => {

    const {username, email, password} = this.props.user

    let user = {
      username: username,
      email: email,
      password: password
    }
    
    axios.post('http://localhost:3001/api/v1/logout', {user}, {withCredentials: true})
    .then(response => {
      
      if (response.data.logged_out) {
        this.props.handleLogout(response
          )
        
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => ('logout api errors:', error))
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

  return (
        <div>
          {this.logout()}
        </div>
      );
    }
  }

export default Logout;
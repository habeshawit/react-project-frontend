// import React, { Component } from 'react';
// import axios from 'axios'

// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       username: '',
//       email: '',
//       password: '',
//       password_confirmation: '',
//       errors: ''
//      };
//   }

// handleChange = (event) => {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })
//   };

//   handleLogin = (data) => {
//     this.setState({
//       isLoggedIn: true,
//       user: data.user
//     })
//   }

//   handleSubmit = (event) => {
//     event.preventDefault()
//     const {username, email, password, password_confirmation} = this.state

//     let user = {
//       username: username,
//       email: email,
//       password: password,
//       password_confirmation: password_confirmation
//     }

//     axios.post('http://localhost:3001/api/v1/users', {user}, {withCredentials: true})
//     .then(response => {
//       if (response.data.status === 'created') {
//         this.props.handleLogin(response.data)
//         this.redirect()
//       } else {
//         this.setState({
//           errors: response.data.errors
//         })
//       }
//     })
//     .catch(error => ('signup api errors:', error))
//   };

// redirect = () => {
//     this.props.history.push('/')
//   }

// handleErrors = () => {
//     return (
//       <div>
//         <ul>
//         {this.state.errors.map(error => {
//         return <li key={error}>{error}</li>
//           })}
//         </ul> 
//       </div>
//     )
//   };

// render() {
//     const {username, email, password, password_confirmation} = this.state

//     return (
//       <div>
//         <h1>Sign Up</h1>        
// <form onSubmit={this.handleSubmit}>
//           <input
//             placeholder="username"
//             type="text"
//             name="username"
//             value={username}
//             onChange={this.handleChange}
//           />
//           <input
//             placeholder="email"
//             type="text"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//           />
//           <input 
//             placeholder="password"
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />          
//           <input
//             placeholder="password confirmation"
//             type="password"
//             name="password_confirmation"
//             value={password_confirmation}
//             onChange={this.handleChange}
//           />
        
//           <button placeholder="submit" type="submit">
//             Sign Up
//           </button>
      
//         </form>
//       </div>
//     );
//   }
// }

// export default Signup;

import React, { Component } from 'react';
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      contact_preference: '',
      location: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

handleSubmit = (event) => {
    event.preventDefault()

    const {username, email, password, password_confirmation, contact_preference, location} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      contact_preference: contact_preference,
      location: location
    }
    // 
axios.post('http://localhost:3001/api/v1/users', {user}, {withCredentials: true})
    .then(response => {
      
      if (response.data.status === 'created') {
        this.props.handleLogin(response)
        this.redirect()
        alert("Welcome to Simple Sales!!")
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => ('signup api errors:', error))
  };
redirect = () => {
    this.props.history.push('/items')
  }
handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }
render() {
    const {username, email, password, password_confirmation, contact_preference, location} = this.state
return (
      <div className="container">

        <h1>Sign Up</h1>
        {/* <h1>Sign Up</h1>
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
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          />
          <input
            placeholder="How would you like buyers to contact you"
            type="text"
            name="contact_preference"
            value={contact_preference}
            onChange={this.handleChange}
          />
        
          <button placeholder="submit" type="submit">
            Sign Up
          </button>
      
        </form> */}
      

      <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formBasicEmail">
    <Form.Label>User Name</Form.Label>
    <Form.Control placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Contact Preference</Form.Label>
    <Form.Control placeholder="How would you like buyers to contact you"
            type="text"
            name="contact_preference"
            value={contact_preference}
            onChange={this.handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Location</Form.Label>
    <Form.Control placeholder="Enter city, state..."
            type="text"
            name="location"
            value={location}
            onChange={this.handleChange} />
  </Form.Group>
  

  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>



        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}
export default Signup;
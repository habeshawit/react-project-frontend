import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/registrations/Login'
import Logout from './components/registrations/Logout'
import Signup from './components/registrations/Signup'
import ItemsList from './components/ItemsList'
import ItemsForm from './components/ItemsForm'
import ItemsApi from './components/ItemsApi'
import ItemShow from './components/ItemShow';
import CategoriesList from './components/CategoriesList';
import CategoryShow from './components/CategoryShow'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
     
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/api/v1/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => ('app api errors:', error))
  }

  handleLogin = (response) => {
    this.setState({
      isLoggedIn: true,
      user: response.data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })

  }

  render() {

    return (
      <div >
         <Navbar collapseOnSelect expand="lg" className="color-nav">
              <Navbar.Brand href="/">Simple Sales</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/items">Items For Sale</Nav.Link>
                  <Nav.Link href="/items/new">Post Item</Nav.Link>    
                </Nav>
              </Navbar.Collapse>
              {this.state.user.username? <Navbar><strong> Welcome, {this.state.user.username }</strong>  <Nav.Link href="/logout"><strong className="nav-color" style={{ textDecoration: 'none', color: 'white' }}>Logout</strong></Nav.Link></Navbar> : null}

              <form className="d-flex">
                <input type="search" placeholder="What are you looking for?" className= "form-control form-control col-sm-30" />
                <button type="button" className="btn btn-warning" type="submit"><Icon.Search color="royalblue" /></button>
              </form>
             
        </Navbar>

        <Container  >
          <BrowserRouter>
            <Switch>
              <Route exact path='/' render={props => (<Home {...props} user={this.state.user}/>)}/>
              <Route exact path='/items' render={props => (<ItemsList {...props} user={this.state.user} />)}/>
              <Route exact path='/items/new' render={props => (<ItemsForm {...props} user={this.state.user} />)}/>
              <Route exact path='/items/:id' render={props => (<ItemShow {...props} user={this.state.user} />)}/>
              <Route path='/items/api' component={ItemsApi}/>
              <Route exact path='/categories' component={CategoriesList}/>
              <Route exact path='/categories/:id' render={props => (<CategoryShow {...props} user={this.state.user} />)}/>
              <Route exact path='/' render={props => (<Home {...props} handleLogout={this.handleLogout} />)}/>
              <Route exact path='/login' render={props => (<Login {...props} handleLogin={this.handleLogin} />)}/>
              <Route exact path='/signup' render={props => (<Signup {...props} handleLogin={this.handleLogin} />)}/>
              <Route exact path='/logout' render={props => (<Logout {...props} user={this.state.user} handleLogout={this.handleLogout} />)}/> 
            </Switch>
          </BrowserRouter>
        </Container>      
      </div>   
    );
  }
}

export default App;
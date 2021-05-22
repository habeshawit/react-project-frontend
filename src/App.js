// import React from 'react'
// import './App.css';
// // import Itemlist from './components/old components/Itemlist';
// // import ItemlistContainer from './containers/ItemlistContainer';
// import { connect } from 'react-redux';
// // import CategoriesContainer from './containers/CategoriesContainer'
// // import ItemsContainer from './containers/ItemsContainer'
// // // import {fetchCategories} from './actions/fetchCategories'
// // // import {fetchItems} from './actions/fetchItemlists'
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
// // import Home2 from './components/Home2'
// import Home from './components/Home'
// import ItemsList from './components/ItemsList'
// import ItemsForm from './components/ItemsForm'
// import ItemsApi from './components/ItemsApi'
// import ItemShow from './components/ItemShow';
// import CategoriesList from './components/CategoriesList';
// import CategoryForm from './components/CategoryForm'
// import CategoryShow from './components/CategoryShow'
// import NavBar from './components/NavBar'
// import Login from './components/Login'
// import Signup from './components/Signup'

// import axios from 'axios'


// //comment back
// // class App extends React.Component{

// //   render(){
// //      return (
// //       <div className="App">
// //         <CategoriesContainer />
// //         {/* <ItemsContainer /> */}
// //         <ItemlistContainer/>
// //       </div>
// //       );
// //   }
// // }

// //ROUTS I NEED:
// // /Items
// // /items/new
// // /items/api
// // /items/:id


// class App extends React.Component{
// // function App(){
//   constructor(props) {
//     super(props);
//     this.state = { 
//       isLoggedIn: false,
//       user: {}
//      };
//   };

//   componentDidMount() {
//     this.loginStatus()
//   }

//   handleLogin = (data) => {
//     this.setState({
//       isLoggedIn: true,
//       user: data.user
//     })
//     // 
//     // this.props.history.push('/items')
//   }

//   handleLogout = () => {
//     this.setState({
//     isLoggedIn: false,
//     user: {}
//     })
//   }

//   loginStatus = () => {
//     axios.get('http://localhost:3001/api/v1/logged_in', 
//    {withCredentials: true})    
// .then(response => {
//       if (response.data.logged_in) {
//         this.handleLogin(response)
//       } else {
//         this.handleLogout()
//       }
//     })
//     .catch(error => ('App api errors:', error))
//   };

//   render(){

//   (this.props);

//   return(
//     <div className="App">
//       <BrowserRouter>
//         <NavBar/>

//         <Switch>
//           <Route exact path='/' component={Home}/>
//           <Route exact path='/items' component={ItemsList}/>
//           <Route path='/items/new' component={ItemsForm}/>
//           <Route path="/items/:id" component={ItemShow} />
//           <Route path='/items/api' component={ItemsApi}/>
//           <Route exact path='/categories' component={CategoriesList}/>
//           <Route path='/categories/new' component={CategoryForm}/>
//           <Route path="/categories/:id" component={CategoryShow} />
//           <Route exact path='/login' render={() =><Login handleLogin = {this.handleLogin}/>}/>
//           <Route exact path='/signup' render={() =><Signup handleLogin = {this.handleLogin}/>}/>
//         </Switch>
      
//       </BrowserRouter>
      
      
//     </div>
//     )
//   }
// }

// const mapStateToProps = (state) =>({user: state.user})
// //connects react to redux store, automatically calls store.dispatch
// // export default connect()(App);
// export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'

import ItemsList from './components/ItemsList'
import ItemsForm from './components/ItemsForm'
import ItemsApi from './components/ItemsApi'
import ItemShow from './components/ItemShow';
import CategoriesList from './components/CategoriesList';
import CategoryForm from './components/CategoryForm'
import CategoryShow from './components/CategoryShow'
import NavBar from './components/NavBar'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';




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
    
    // this.props.history.push('/')
  }

render() {

    return (
      <div >
         <Navbar collapseOnSelect expand="lg" bg="light" >
            <Container>
              <Navbar.Brand href="/">Simple Sales</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/items">Items For Sale</Nav.Link>
                  <Nav.Link href="/items/new">Post Item</Nav.Link>    
                </Nav>
                <Nav>
                  <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                </Nav>
                {this.state.user.username? <Navbar>Welcome,<strong>{this.state.user.username}</strong></Navbar> : null}
              </Navbar.Collapse>
            </Container>
        </Navbar>

      <div className="container">

        <BrowserRouter>
          
            {/* <NavBar user = {this.state.user} handleLogout = {this.handleLogout}  /> */}
          
            <Switch>
              <Route exact path='/' render={props => (<Home {...props} user={this.state.user} loggedInStatus={this.state.isLoggedIn}/>)}/>
              <Route exact path='/items' render={props => (<ItemsList {...props} user={this.state.user} loggedInStatus={this.state.isLoggedIn}/>)}/>
              <Route exact path='/items/new' render={props => (<ItemsForm {...props} user={this.state.user} loggedInStatus={this.state.isLoggedIn}/>)}/>
              <Route exact path='/items/:id' render={props => (<ItemShow {...props} user={this.state.user} loggedInStatus={this.state.isLoggedIn}/>)}/>
              <Route path='/items/api' component={ItemsApi}/>
              <Route exact path='/categories' component={CategoriesList}/>
              <Route path='/categories/new' component={CategoryForm}/>
              <Route exact path='/categories/:id' render={props => (<CategoryShow {...props} user={this.state.user} loggedInStatus={this.state.isLoggedIn}/>)}/>



              <Route 
                exact path='/' 
                render={props => (
                <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
                )}
              />
              <Route 
                exact path='/login' 
                render={props => (
                <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                )}
              />
              <Route 
                exact path='/signup' 
                render={props => (
                <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
                )}
              />
            </Switch>
            <Route 
                exact path='/logout' 
                render={props => (
                <Logout {...props} user={this.state.user} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
                )}
              /> 
          </BrowserRouter>
      </div>



</div>
        
    );
  }
}
export default App;
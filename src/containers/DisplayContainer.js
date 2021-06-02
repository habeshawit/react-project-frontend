import React, { Component } from 'react'
import {getCategories} from '../redux/actions/CategoryActions'
import {getItems} from '../redux/actions/ItemActions'
import {connect} from 'react-redux'


import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/registrations/Login'
import Logout from '../components/registrations/Logout'
import Signup from '../components/registrations/Signup'
import ItemsList from '../components/ItemsList'
import ItemsForm from '../components/ItemsForm'
import ItemsApi from '../components/ItemsApi'
import ItemShow from '../components/ItemShow';
import CategoriesList from '../components/CategoriesList';
import CategoryShow from '../components/CategoryShow'
import Container from 'react-bootstrap/Container';



class DisplayContainer extends Component{
   
    componentDidMount(){
        this.props.getCategories();
        this.props.getItems();
    }
    
    render(){        
        // debugger
        return(
            
            <div>

    <Container  >
        <BrowserRouter>
        <Switch>
            <Route exact path='/' render={props => (<Home {...props} />)}/>
            <Route exact path='/items' render={props => (<ItemsList {...props} />)}/>
            <Route exact path='/items/new' render={props => (<ItemsForm {...props}  />)}/>
            <Route exact path='/items/:id' render={props => (<ItemShow {...props}  />)}/>
            <Route path='/items/api' component={ItemsApi}/>
            <Route exact path='/categories' render={props => (<CategoriesList {...props}  />)}/>
            <Route exact path='/categories/:id' render={props => (<CategoryShow {...props}  />)}/>
            <Route exact path='/' render={props => (<Home {...props}  />)}/>
            <Route exact path='/login' render={props => (<Login {...props}  />)}/>
            <Route exact path='/signup' render={props => (<Signup {...props}  />)}/>
            <Route exact path='/logout' render={props => (<Logout {...props}  />)}/> 
        </Switch>
        </BrowserRouter>
    </Container>      
            </div>
        )
    }   
}

const mapStateToProps = state =>{
    return{
        categories: state.categories,
        items: state.items
    }
}

export default connect(mapStateToProps, { getItems, getCategories})(DisplayContainer)
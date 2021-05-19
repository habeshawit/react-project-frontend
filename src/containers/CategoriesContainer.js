import React from 'react'
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import { fetchCategories } from '../actions/fetchCategories'
import Categories from '../components/Categories'
import Category from '../components/Category'
import CategoryInput from '../components/CategoryInput'
import Itemlist from '../components/Itemlist';
import ItemForm from '../components/ItemForm';


class CategoriesContainer extends React.Component {
    
    componentDidMount() {
        this.props.fetchCategories()
    }

    
    //switch will render the first route that matches the given path
    render(){
        return(
            <div>
                <Switch> 
                    <Route path='/categories/new' component = {CategoryInput}/>
                    <Route path='/categories/:id' render={(routerProps) => <Category {...routerProps} categories={this.props.categories}/>}/>
                    <Route path='/categories' render={(routerProps) => <Categories {...routerProps} categories={this.props.categories}/>} />
                    {/* <Route path='/items/new' render={(routerProps) => <ItemForm {...routerProps} categories={this.props.categories}/>} />
                    <Route path='/items' render={(routerProps) => <Itemlist {...routerProps} categories={this.props.categories}/>} /> */}
                </Switch>
                
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        categories: state.categories 
    }
}

export default connect(mapStateToProps, {fetchCategories})(CategoriesContainer);
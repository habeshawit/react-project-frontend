import React, {useEffect } from 'react'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Item from './Item'

function CategoriesShow(props){

    useEffect(() => {
        props.getCategories();
    },[]);

    const category = () => {
        return(
            props.categories.find(({id}) => id == props.match.params.id)
        )
    }

    const handleDelete = () =>{
        props.deleteItem(this.state.item.id, props.history)
    }
    
    const renderItems = (category) =>{
        return(
            <div className="container2">
            <h1>{category.name}</h1>
            <div className= "item-grid">         
                {category.items.map(item => 
                    <Item {...item} userId={props.user.id} handleDelete={handleDelete} key={`item${item.id}`}/>
                )}               
            </div>
        </div>
        )      
    }
    
    return (
        <div>
            {category() ? renderItems(category()): null}
         </div>
    )
}

const mapStateToProps = state =>{
    return{
        categories: state.categories
    }
}

export default connect(mapStateToProps, {getCategories})(CategoriesShow)

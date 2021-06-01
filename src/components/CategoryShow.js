import React, {useState, useEffect } from 'react'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

function CategoriesShow(props){

    useEffect(() => {
        props.getCategories();
    });

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
            <div>
            <h1>{category.name}</h1>
            <div className= "row row-cols-1 row-cols-md-4 g-4">         
                {category.items.map(item => 
                    <div className="col">
                    {item.user ? 
                        <div className = "card h-100" key={item.id}>
                            <center><h5>{item.name}</h5></center>
                            <Link to={`/items/${item.id}`}><img src={item.image_url}></img></Link>
                            <p>${item.price}</p>
                            {props.user.id == item.user.id? 
                                <div>
                                    <Button size="small" variant="outlined" color="secondary" onClick={(e) => handleDelete(item.id, e)} >Delete</Button>
                                </div>
                                : null}                      
                        </div>
                    : null}                   
                    </div>
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

import React, {useState, useEffect } from 'react'
import {getItems, deleteItem} from '../redux/actions/ItemActions'
import {connect} from 'react-redux'
import Item from './Item'

function UserItems(props){

  useEffect(() => {
	  props.getItems();
  },[]);

  const handleDelete = (itemId) =>{
	  props.deleteItem(itemId, props.history)
  }

  const userItems = () => {
    return(
        props.items.filter(item => item.user.id == props.user.id)
    )
  }

  const renderItems = (items) =>{
    return(
        <div className="container2">
        <h1>Items you have posted:</h1>
        <div className= "item-grid">         
            {items.map(item => 
                <Item {...item} userId={props.user.id} handleDelete={handleDelete} key={`item${item.id}`}/>
            )}               
        </div>
    </div>
    )      
}
  
	return (
        <div>
            {userItems() ? renderItems(userItems()): "You have not posted any items"}
         </div>
	)

}



const mapStateToProps = state =>{
    return{
        items: state.items
    }
}

export default connect(mapStateToProps, {getItems, deleteItem})(UserItems)

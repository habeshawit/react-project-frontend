import React, {useState, useEffect } from 'react'
import {getItems, deleteItem, editItem} from '../redux/actions/ItemActions'
import {connect} from 'react-redux'
import CategoriesList from '../components/CategoriesList';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import * as Icon from 'react-bootstrap-icons';
import Item from './Item'

function ItemsList(props){

  useEffect(() => {
	  props.getItems();
  },[]);

  const handleDelete = (itemId) =>{
	  props.deleteItem(itemId, props.history)
  }

  const handleEdit = (itemId) =>{
	  props.editItem(itemId, props.history)
  }

	return (
		<div className="container2">                         
				{props.user.id ? 
						null : 
						<div>
							<Button size="small" variant="outlined" color="secondary"><Link to='/login'>Log In</Link></Button> | | 
							<Button size="small" variant="outlined" color="secondary"><Link to='/signup'>Sign Up</Link></Button>     
						<hr></hr>
						</div>      
				}  

        What are you looking for? 
        
        <div className="form-group row">
          <div className ="col-sm-4 no-right-padding">
            <input type="text" placeholder="Search for an item" className= "form-control form-control-sm" />
          </div>

          <div className="col-sm-1 no-left-padding" className="search-button">
            <button type="button" className="btn btn-warning" ><Icon.Search color="royalblue" /></button>
          </div>
        </div>    

        <div>
            <CategoriesList /> <hr></hr>                 
        </div>

				<div className="item-grid">
					{props.items.map(item => <Item {...item} userId={props.user.id} handleDelete={handleDelete} handleEdit={handleEdit} key={`item${item.id}`}/>)}
				</div>

		</div>
	)

}

const mapStateToProps = state =>{
    return{
        items: state.items
    }
}

export default connect(mapStateToProps, {getItems, deleteItem, editItem})(ItemsList)


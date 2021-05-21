import React from 'react'
import {Link} from 'react-router-dom'

import {deleteItem, getItems} from '../redux/actions/ItemActions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function SingleItem(props) {
    const history =useHistory();

    const handleDelete = () =>{
        props.deleteItem(props.item.id, history)
        props.getItems()
    }
// 
    return (
        
        <div className="col">
            <div className = "card h-100" key={props.item.id}>
                <center><h5>{props.item.name}</h5></center>
                <Link to={`/items/${props.item.id}`}><img src={props.item.image_url}  width="245" height="245"></img></Link>
                <p></p>${props.item.price}
                {/* {props.current_user.id == props.item.user.id? 
                    <div>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                    : null} */}
                
            </div>
        </div>
        
    )
}

export default connect(null, { deleteItem, getItems})(SingleItem)
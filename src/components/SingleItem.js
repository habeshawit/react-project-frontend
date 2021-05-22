import React from 'react'
import {Link} from 'react-router-dom'

import {deleteItem, getItems} from '../redux/actions/ItemActions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';

function SingleItem(props) {
    const history =useHistory();

    const handleDelete = () =>{
        props.deleteItem(props.item.id, history)
        props.getItems()
    }
// 
    return (
       
        <div className="col">
            {props.item.user ? <div className = "card h-100" key={props.item.id}>
                <center><h5>{props.item.name}</h5></center>
                <Link to={`/items/${props.item.id}`}><img src={props.item.image_url}></img></Link>
                <p>${props.item.price}</p>
                {props.current_user.id == props.item.user.id? 
                    <div>
                        <Button size="small" variant="outlined" color="secondary" onClick={handleDelete}>Delete</Button>
                    </div>
                    : null}
                
            </div>
            : null}
            
        </div>
        
    )
}

export default connect(null, { deleteItem, getItems})(SingleItem)
import React, {useState, useEffect } from 'react'
import {deleteItem} from '../redux/actions/ItemActions'
import EditForm from './EditForm'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


function ItemShow(props){
  
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/items/${props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => setItem( data ));
  },[]);

  const handleDelete = () =>{
    props.deleteItem(item.id, props.history)
  }

    return (      
      
      <div className="container"> 
        <br></br>

        <div className="row">
          
          <div className="col" >
            <br></br>
            {item.image ? 
              <img src={`http://localhost:3001/${item.image.url}`} width="550" height="550" alt="image" /> : <img src={item.image_url}  width="550" height="550"></img> }  
          </div>

          <div className="col">
          
            
            {item.user ? 
              <div> 
                <br></br>
                <h1>{item.name}</h1>
                <h2>${item.price}</h2>
            
                {new Date().getDate() - new Date(item.created_at).getDate() != 0 ? <>Posted {((new Date() - new Date(item.created_at))/(1000*60*60*24)).toFixed(0)} days ago </> : <>Posted today </>} in <b>{item.user.location}</b><br></br><br></br>
 
                <p>Condition: {item.condition}</p>
                <p>Category: {item.category.name}</p>
                {item.user.id == props.user.id ? <>
                <Button size="small" variant="outlined" color="secondary" onClick={handleDelete}>Delete Item</Button></> : null}
                <hr></hr>
                <h4>Seller Contact Info: </h4>

                  <div className="row">
                    <div className="avatar">
                      <img alt="Joel" src="https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar-small.png" className="MuiAvatar-img" width="50" height="50" ></img>
                    </div>
                    <div>
                      <p><b> Sold by: {item.user.username}</b></p>
                      <p>{item.user.contact_preference}</p>
                      <p>Member since {new Date(item.user.created_at).toLocaleString('en-us', { month: 'long'})} {new Date(item.user.created_at).getFullYear()}</p>
                    </div>
                  </div>       
                <hr></hr>
              </div>
              : null}
          </div>
          <div className="description-info">
            <h3>Description:</h3><p>{item.description}</p>
          </div>
        </div>  
              
      </div>
    );

}

export default connect(null, { deleteItem})(ItemShow)


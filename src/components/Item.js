
import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Item = ({user, id, image, image_url, name, price, userId, handleDelete}) => {
    return <div className="item-box">
                                          
      {user ? 
      <div className="item-box-inner">
          <Link to={`/items/${id}`}>
            <div className="item-box-inner2">
                {image ? 
                <img className="image" src={`http://localhost:3001/${image.url}`} className="item-img" /> : <img className="image" src={image_url} className="item-img"></img > }  
            </div>  
    
            <div className="item-box-text">
                <h5>{name}</h5>
                ${price}
                <div className="user-location">{user.location}</div>               
            </div> 
          </Link> 
          
          {userId == user.id? 
                <div className="btnn">
                  <Button size="small" variant="outlined" color="secondary" onClick={(e) => handleDelete(id, e)} >Delete</Button>
                </div>
            : null}  
      </div>
      : null}  
    </div>  
  }

  export default Item;
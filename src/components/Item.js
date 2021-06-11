
import React from 'react';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Item = ({user, id, image_url, name, price, userId, handleDelete}) => {
    return <div className="item-box">
                                          
      {user ? <Link to={`/items/${id}`}>
      <div className="item-box-inner">
          <div className="item-box-inner2">
              <img className="image" src={image_url} className="item-img"></img >
          </div>  
  
          <div className="item-box-text">
              <h5>{name}</h5>
              ${price}
              <div className="user-location">{user.location}</div>
  
              {userId == user.id? 
                  <div className="btnn">
                      <Button size="small" variant="outlined" color="secondary" onClick={(e) => handleDelete(id, e)} >Delete</Button>
                  </div>
                  : null}  
          </div>  
      </div>
      </Link>: null}  
    </div>  
  }

  export default Item;
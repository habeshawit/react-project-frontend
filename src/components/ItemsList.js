import React, {useState, useEffect } from 'react'
import {getItems, deleteItem} from '../redux/actions/ItemActions'
import {connect} from 'react-redux'
import CategoriesList from '../components/CategoriesList';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import * as Icon from 'react-bootstrap-icons';

function ItemsList(props){

  const searchInputRef = React.useRef(null);

  useEffect(() => {
	  props.getItems();
    searchInputRef.current.focus();
  },[]);

  const handleDelete = (itemId) =>{
	  props.deleteItem(itemId, props.history)
  }

	return (
		<div className="container">                         
				<br></br>
				<h1>Welcome to Simple Sales</h1>
				{props.user.id ? 
						null : 
						<div>
						<hr></hr>
								<Button size="small" variant="outlined" color="secondary"><Link to='/login'>Log In</Link></Button> | | 
								<Button size="small" variant="outlined" color="secondary"><Link to='/signup'>Sign Up</Link></Button>     
						<hr></hr>
						</div>      
				}  
				<p>What are you looking for? </p>
				<div className="form-group row">
					<div className ="col-sm-4 no-right-padding">
						<input type="text" placeholder="Search for an item" ref={searchInputRef} className= "form-control form-control-sm" />
					</div>

					<div className="col-sm-1 no-left-padding" className="search-button">
						<button type="button" className="btn btn-warning" ><Icon.Search color="royalblue" /></button>
					</div>
				</div>    
				<div>
						<CategoriesList />                  
				</div>
						<div className= "row">
								{props.items.map(item => 
										<Item {...item} userId={props.user.id} handleDelete={handleDelete} key={`item${item.id}`}/>
										)}
								</div>
				</div>
	)

}



const mapStateToProps = state =>{
    return{
        items: state.items
    }
}

//mapstatetoprops gets the state in our redux store, getItems action will dispatch the action we are importing from itemActions, through componentDidMount

export default connect(mapStateToProps, {getItems, deleteItem})(ItemsList)



const Item = ({user, id, image_url, name, price, userId, handleDelete}) => {
  const [count, setCount] = useState(0);
  
  const handleVote = () =>{
    setCount(
      count +1 
    )
  }

  return <div className = "col-sm-3">
										
    {user ? 
    <div className="item-box">
        <Link to={`/items/${id}`}><img src={image_url} className="item-img"></img ></Link>
        <button onClick={handleVote}>Upvote</button> {count}
        <p>{name}</p>
        <b>${price}</b>
        {userId == user.id? 
            <div className="btnn">
                <Button size="small" variant="outlined" color="secondary" onClick={(e) => handleDelete(id, e)} >Delete</Button>
            </div>
            : null}         
    </div>
    : null}  
  </div>  
}
import React, {Component} from 'react'
import {getItems, deleteItem} from '../redux/actions/ItemActions'
import {connect} from 'react-redux'
import CategoriesList from '../components/CategoriesList';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';


class ItemsList extends Component {

    componentDidMount(){
        this.props.getItems();
    }

    handleDelete = (itemID) =>{
        
        this.props.deleteItem(itemID, this.props.history)
        this.setState({
            items: this.props.items.filter(i => i.id != itemID),
            
          });
          
        this.props.getItems()
    }
    
    render(){
        return (
            <div>
        
                <div>
                    
                    <br></br>
                    <h1>Welcome to Simple Sales</h1>
                    {this.props.user.id ? 
                        null : 
                        <div>
                            <Button size="small" variant="outlined" color="secondary"><Link to='/login'>Log In</Link></Button> | | 
                            <Button size="small" variant="outlined" color="secondary"><Link to='/signup'>Sign Up</Link></Button>     
                        </div>
                    }      
                    <div>
                        <CategoriesList />                  
                    </div>
                                <div className="container2">
                                    <div className= "row row-cols-1 row-cols-md-5 g-4">
                                        {this.props.items.map(item => 
                                        <div className="col">
                        {item.user ? 
                            <div className = "card h-100" key={item.id}>
                            <center><h5>{item.name}</h5></center>
                            <Link to={`/items/${item.id}`}><img src={item.image_url}></img></Link>
                            <p>${item.price}</p>
                            {this.props.user.id == item.user.id? 
                                <div>
                                    <Button size="small" variant="outlined" color="secondary" onClick={(e) => this.handleDelete(item.id, e)} >Delete</Button>
                                    {/* <button onClick={(e) => this.handleDelete(item.id, e)}>Delete Item</button> */}
                                </div>
                                : null}         
                            </div>
                        : null}  

                        
                    </div>
                            
                            )}
                        </div>
                    </div>
                    
                </div>
                
                
            </div>
        )
    }

}

const mapStateToProps = state =>{
    return{
        items: state.items
    }
}

//mapstatetoprops gets the state in our redux store, getItems action will dispatch the action we are importing from itemActions, through componentDidMount

export default connect(mapStateToProps, {getItems, deleteItem})(ItemsList)

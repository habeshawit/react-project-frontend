import React, {Component} from 'react'
import {getItems, deleteItem} from '../redux/actions/ItemActions'
import {connect} from 'react-redux'
import CategoriesList from '../components/CategoriesList';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import * as Icon from 'react-bootstrap-icons';
// import Button from 'react-bootstrap/Button';


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
            <div className="container">                         
                <br></br>
                <h1>Welcome to Simple Sales</h1>
                {this.props.user.id ? 
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
                    <input type="text" placeholder="Search for an item" autofocus="true" className= "form-control form-control-sm" />
                  </div>

                  <div className="col-sm-1 no-left-padding" className="search-button">
                    <button type="button" className="btn btn-warning" ><Icon.Search color="royalblue" /></button>
                  </div>
                </div>    
                <div>
                    <CategoriesList />                  
                </div>
                {/* <div className="container2"> */}
                    <div className= "row">
                        {this.props.items.map(item => 
                            // <div className="col">
                            <div className = "col-sm-3">
                            
                                {item.user ? 
                                <div className="item-box">
                                    {/* <div key={item.id}> */}
                                    {/* <div className = "card h-100" key={item.id}> */}
                                    
                                    <Link to={`/items/${item.id}`}><img src={item.image_url} className="item-img"></img ></Link>
                                    <h5><b>{item.name}</b></h5>
                                    <p>${item.price}</p>
                                    {this.props.user.id == item.user.id? 
                                        <div>
                                            <Button size="small" variant="outlined" color="secondary" onClick={(e) => this.handleDelete(item.id, e)} >Delete</Button>
                                        </div>
                                        : null}         
                                    </div>
                                : null}  
                            </div>  
                            // </div>
                        )}
                    </div>
                {/* </div>                 */}
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

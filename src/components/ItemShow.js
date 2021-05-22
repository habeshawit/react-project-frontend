  
import React, { Component } from "react";
import {deleteItem} from '../redux/actions/ItemActions'
import { connect } from 'react-redux'
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';



class ItemShow extends Component {
  
  state = {
    item: {}
  };
  


  componentDidMount() {
      
    fetch(`http://localhost:3001/api/v1/items/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ item: data }));
      
  }

  handleDelete = () =>{
    this.props.deleteItem(this.state.item.id, this.props.history)
    
    // this.props.history.push('/items')
}

  render() {

    return (
       
      <div className="container"> 
      <br></br>
        <h1>{this.state.item.name}</h1>
        {/* <div className="container2"> */}
           
  <div className="row">
    <div className="col" >
        <img src={this.state.item.image_url}  width="500" height="500"></img>       
    </div>
    <div className="col">
      <h4>${this.state.item.price}</h4>
      <h4>Description: </h4><p>{this.state.item.description}</p>
      {this.state.item.user ? 
          <div>
            <h4>Seller Contact Info: </h4>
            <p>Sold by: {this.state.item.user.username}</p>
            <p>{this.state.item.user.contact_preference}</p>
            <h4>Location: </h4><p>{this.state.item.user.location}</p>
                {this.state.item.user.id == this.props.user.id ? 
                <Button size="small" variant="outlined" color="secondary" onClick={this.handleDelete}>Delete</Button> : null}
            </div>
      : null}
                        
                        
                        
    {/* </div> */}
  </div>
  </div>
        
</div>
    );
  }
}

export default connect(null, { deleteItem})(ItemShow)


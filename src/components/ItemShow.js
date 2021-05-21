  
import React, { Component } from "react";
import {deleteItem} from '../redux/actions/ItemActions'
import { connect } from 'react-redux'



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
    this.props.deleteItem(this.state.item.id)
    this.props.history.push('/items')
}

  render() {
    return (
      <div className="container">
        <h1>{this.state.item.name}</h1>    
            <div className= "row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className = "card h-100" key={this.state.item.id}>       
                        <img src={this.state.item.image_url}  width="400" height="400"></img>
                        <p>${this.state.item.price}</p>
                        <strong>Description: </strong><p>{this.state.item.description}</p>
                        <p><strong>In Stock: </strong>{this.state.item.qty}</p>
                        <button onClick={this.handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
    </div>
    );
  }
}

export default connect(null, { deleteItem})(ItemShow)


  
import React, { Component } from "react";
import SingleItem from '../components/SingleItem'

export default class PokemonApiShow extends Component {
  
  state = {
    item: {}
  };
  
  componentDidMount() {
      
    fetch(`http://localhost:3000/api/v1/items/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((data) => this.setState({ item: data }));
      
  }

  render() {
    return (
      <div>
        <h1>Show Page from Api</h1>
        <div className="col">
            <div className = "card h-100" key={this.state.item.id}>       
                <img src={this.state.item.image_url}  width="400" height="400"></img>
                <h4>{this.state.item.name}</h4>
                <p>${this.state.item.price}</p>
                <strong>Description: </strong><p>{this.state.item.description}</p>
                <p><strong>In Stock: </strong>{this.state.item.qty}</p>
                {/* <p><strong>Category:</strong>{this.state.item.category}</p> */}
            </div>
        </div>
      </div>
    );
  }
}
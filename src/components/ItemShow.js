import React, { Component } from "react";
import {deleteItem} from '../redux/actions/ItemActions'
import { connect } from 'react-redux'
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
  }

  render() {
    return (      
      <div className="container"> 
        <br></br>
        {/* <h1>{this.state.item.name}</h1> */}

        <div className="row">
          
          <div className="col" >
            <br></br>
            <img src={this.state.item.image_url}  width="550" height="550"></img>       
          </div>

          <div className="col">
          <br></br>
          <h1>{this.state.item.name}</h1>
          <h2>${this.state.item.price}</h2>
          {new Date().getDate() - new Date(this.state.item.created_at).getDate() != 0 ? <>Posted {new Date().getDate() - new Date(this.state.item.created_at).getDate()} days ago </> : <>Posted today </>}
            in <b>{this.props.user.location}</b><br></br><br></br>
            <p>Condition: {this.state.item.condition}</p>
            {this.state.item.user ? 
              <div>
                <p>Category: {this.state.item.category.name}</p>
                {this.state.item.user.id == this.props.user.id ? 
                <Button size="small" variant="outlined" color="secondary" onClick={this.handleDelete}>Delete Item</Button> : null}
                <hr></hr>
                <h4>Seller Contact Info: </h4>

                  <div className="row">
                    <div className="avatar">
                      <img alt="Joel" src="https://d2fa3j67sd1nwo.cloudfront.net/images/default-avatar-small.png" class="MuiAvatar-img" width="50" height="50" ></img>
                    </div>
                    <div>
                      <p><b> Sold by: {this.state.item.user.username}</b></p>
                      <p>{this.state.item.user.contact_preference}</p>
                      <p>Member since {new Date(this.state.item.user.created_at).toLocaleString('en-us', { month: 'long'})} {new Date(this.state.item.user.created_at).getFullYear()}</p>
                    </div>
                  </div>       
                <hr></hr>
              </div>
              : null}
          </div>
          <div className="description-info">
            <h3>Description:</h3><p>{this.state.item.description}</p>
          </div>
        </div>  
              
      </div>
    );
  }
}

export default connect(null, { deleteItem})(ItemShow)


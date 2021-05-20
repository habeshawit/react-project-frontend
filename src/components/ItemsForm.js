//class component

import React, { Component } from 'react'
import {createItem} from '../redux/actions/ItemActions'
import {connect} from 'react-redux'

class ItemsForm extends Component{

    state = {
        category_id: 2,
        name: '',
        description: '',
        qty: '',
        price: '',
        image_url: ''
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        // debugger
    }
    
    handleSubmit = (event) => {
        // debugger
        event.preventDefault()
        this.props.createItem(this.state)
        this.setState({
            category_id: 2,
            name: '',
            description: '',
            qty: '',
            price: '',
            image_url: ''
        })
    }

    render(){
        return(
            <div>
                <strong>Add a new item:</strong><hr></hr>
              <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Category:</label>
                    {/* <select name="category_id" onChange={this.handleChange}>
                        {categories}
                    </select> */}
                    <br></br><label>Item Name: </label>
                    <input type='textarea' placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <br></br><label>Description: </label>
                    <input type='text' placeholder="Description of item" value={this.state.description} name="description" onChange={this.handleChange}/>
                    <br></br><label>Quantity: </label>
                    <input type='text' placeholder="Quantity in stock" value={this.state.qty} name="qty" onChange={this.handleChange}/>
                    <br></br><label>Unit Price: </label>
                    <input type='text' placeholder="Unit price" value={this.state.price} name="price" onChange={this.handleChange}/>
                    <br></br><label>Image URL: </label>
                    <input type='text' placeholder="Image URL" value={this.state.image_url} name="image_url" onChange={this.handleChange}/>

                    <hr></hr><button type='submit'>Post Item</button>
                </form>
            </div>
            </div>
        )
    }
}

export default connect(null, { createItem})(ItemsForm)
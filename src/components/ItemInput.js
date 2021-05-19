import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../actions/addItem'

//need to be a class so we can have a state and create controlled form
class ItemInput extends React.Component {

    
    state = {
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
        this.props.addItem(this.state, this.props.category_id)
        this.setState({
            name: '',
            description: '',
            qty: '',
            price: '',
            image_url: ''
        })
    }
    
    render(){
        // debugger
        return(
            <div>
                <strong>Add a new item:</strong>
                <hr></hr>
              <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <label>Category:</label>
                    <select name="category_id">
                        <option selected>{this.props.category_id}</option>
                    </select> */}
                    {/* <input type='text' value={this.props.category_id} name="category_id"/> */}
                    <br></br><label>Item Name: </label>
                    <input type='text' placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <br></br><label>Description: </label>
                    <input type='text' placeholder="Description of item" value={this.state.description} name="description" onChange={this.handleChange}/>
                    <br></br><label>Quantity: </label>
                    <input type='text' placeholder="Quantity in stock" value={this.state.qty} name="qty" onChange={this.handleChange}/>
                    <br></br><label>Unit Price: </label>
                    <input type='text' placeholder="Unit price" value={this.state.price} name="price" onChange={this.handleChange}/>
                    <br></br><label>Image URL: </label>
                    <input type='text' placeholder="Image URL" value={this.state.image_url} name="image_url" onChange={this.handleChange}/>

                    <hr></hr><input type='submit'/>
                </form>
            </div>
            </div>
        )
    }
}

export default connect(null, {addItem})(ItemInput);


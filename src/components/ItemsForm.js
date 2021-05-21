//class component

import React, { Component } from 'react'
import {createItem} from '../redux/actions/ItemActions'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'

class ItemsForm extends Component{

    
    componentDidMount(){
        this.props.getCategories();
    }
    
    state = {
        user_id: '',
        category_id: 1,
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
        // 
    }
    
    handleSubmit = (event) => {
        this.state.user_id = this.props.user.id
        
        event.preventDefault()
        this.props.createItem(this.state, this.props.history)
        // this.props.history.push("/items/")
        this.setState({
            user_id: '',
            category_id: 1,
            name: '',
            description: '',
            qty: '',
            price: '',
            image_url: ''
        })
        
    }

    render(){
        // 
        let categories = this.props.categories.length > 0 && this.props.categories.map((category) => {
            // 
            return(
                <option key={category.id} value={category.id}>{category.name}</option>
            )
        },this)
        
      

        // 
        return(
            
            <div>
                <strong>Add new item2:</strong><hr></hr>
              <div>
                <form onSubmit={this.handleSubmit}>
                    <label>UserID</label>
                     <input type="text" name="user_id" defaultValue={this.state.user_id}/><br></br>
      
                    <label>Category:</label>
                    <select name="category_id" onChange={this.handleChange}>
                        {categories}
                    </select>
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


const mapStateToProps = state =>{
    return{
        categories: state.categories,
        // user: state.user
    }
}

export default connect(mapStateToProps, { createItem, getCategories})(ItemsForm)
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
        // 
    }
    
    handleSubmit = (event) => {
        // 
        event.preventDefault()
        this.props.createItem(this.state, this.props.history)
        this.setState({
            category_id: 2,
            name: '',
            description: '',
            qty: '',
            price: '',
            image_url: ''
        })
        // this.props.history.push("/items")
    }

    render(){
        // debugger
        let categories = this.props.categories.length > 0 && this.props.categories.map((category, i) => {
            return(
                <option key={i} value={category.id}>{category.name}</option>
            )
        },this)

        return(
            <div>
                {console.log(this.props.categories)}
                <strong>Add new item2:</strong><hr></hr>
              <div>
                <form onSubmit={this.handleSubmit}>
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
        categories: state.categories
    }
}

export default connect(mapStateToProps, { createItem, getCategories})(ItemsForm)
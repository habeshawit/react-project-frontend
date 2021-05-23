import React, { Component } from 'react'
import {createItem} from '../redux/actions/ItemActions'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';

class ItemsForm extends Component{
   
    componentDidMount(){
        this.props.getCategories();
    }
    
    state = {
        user_id: '',
        category_id: 1,
        name: '',
        description: '',
        price: '',
        image_url: ''
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        this.state.user_id = this.props.user.id
        
        event.preventDefault()
        this.props.createItem(this.state, this.props.history)
      
        this.setState({
            user_id: this.props.user.id,
            category_id: 1,
            name: '',
            description: '',
            price: '',
            image_url: ''
        })        
    }

    render(){        
        let categories = this.props.categories.length > 0 && this.props.categories.map((category) => {
            return(
                <option key={category.id} value={category.id}>{category.name}</option>
            )
        },this)
        
        return(
            
            <div>

                <br></br>
                <strong>Post new item:</strong><hr></hr>
    
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Col sm="10">
                        <Form.Control type="hidden" name="user_id" defaultValue={this.state.user_id} onSubmit={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="10">
                            <select name="category_id" onChange={this.handleChange}>
                                    {categories}
                            </select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Item Name
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows={3} placeholder="Description of item" value={this.state.description} name="description" onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Price
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Price of item" value={this.state.price} name="price" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Image URL
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Add an image" value={this.state.image_url} name="image_url" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <hr></hr>
                    <Button size="small" variant="outlined" color="primary" type="submit">
                        Post Item
                    </Button>
                </Form>
            </div>
        )
    }   
}

const mapStateToProps = state =>{
    return{
        categories: state.categories,
    }
}

export default connect(mapStateToProps, { createItem, getCategories})(ItemsForm)
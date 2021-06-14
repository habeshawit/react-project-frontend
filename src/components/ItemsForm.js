import React, { Component } from 'react'
import {createItem} from '../redux/actions/ItemActions'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';

import ImageUploader from 'react-images-upload';

class ItemsForm extends Component{
   
    componentDidMount(){
        this.props.getCategories();
    }
    
    state = {
        category_id: 1,
        name: '',
        condition: 'New',
        description: '',
        price: '',
        image: null
    }


    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onImageChange = event => { 
        this.setState({ image: event.target.files[0] });
      };

    handleSubmit = (event) => {

        event.preventDefault()
        const data = new FormData
        
        data.append('item[user_id]', this.props.user.id)
        data.append('item[category_id]', this.state.category_id)
        data.append('item[name]', this.state.name)
        data.append('item[condition]', this.state.condition)
        data.append('item[description]', this.state.description)
        data.append('item[price]', this.state.price)
        data.append('item[image]', this.state.image)

        this.props.createItem(data, this.props.history)
      
        this.setState({
            category_id: 1,
            name: '',
            condition: 'New',
            description: '',
            price: '',
            image: null
        })        
    }

    render(){        
        let categories = this.props.categories.length > 0 && this.props.categories.map((category) => {
            return(
                <option key={category.id} value={category.id}>{category.name}</option>
            )
        },this)
        
        return(
            <Container className="item-form" >
            <div>

                <br></br>
                <strong>Post new item:</strong><hr></hr>
    
                <Form onSubmit={this.handleSubmit}>
                    
            {/* <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.handleChange}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                filename={this.state.images}
            /> */}
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Item Name
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="10">
                            <select name="category_id" onChange={this.handleChange} className="custom-select">
                                    {categories}
                            </select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Condition
                        </Form.Label>
                        <Col sm="10">
                            <select name="condition" onChange={this.handleChange} className="custom-select">
                                <option value="New">New</option>
                                <option value="Open box (never used)">Open box (never used)</option>
                                <option value="Reconditioned/Refurbished">Reconditioned/Refurbished</option>
                                <option value="Used (like new)">Used (like new)</option>
                                <option value="Used (normal wear)">Used (normal wear)</option>
                                <option value="Other (see description)">Other (see description)</option>
                            </select>      
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows={3} placeholder="Sell faster with a description!" value={this.state.description} name="description" onChange={this.handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Price
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="$0" value={this.state.price} name="price" onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <input type="file" accept="image/*" multiple={false} onChange={this.onImageChange}/>
 
                    <hr></hr>
                    <Button size="small" variant="outlined" color="primary" type="submit">
                        Post Item
                    </Button>
                </Form>
            </div>
            </Container>
        )
    }   
}

const mapStateToProps = state =>{
    return{
        categories: state.categories,
    }
}

export default connect(mapStateToProps, { createItem, getCategories})(ItemsForm)
import React, {useState, useEffect } from 'react'
import {editItem, getItems} from '../redux/actions/ItemActions'
import {getCategories} from '../redux/actions/CategoryActions'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';

function EditForm(props){
  
    const [item, setItem] = useState({});
    const [categories, setCategories] = useState({});
  
    useEffect(() => {
      fetch(`http://localhost:3001/api/v1/items/${props.match.params.id}`)
        .then((res) => res.json())
        .then((data) => setItem( data ));
    },[]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/v1/categories`)
          .then((res) => res.json())
          .then((data) => setCategories( data ));
      },[]);

    // const currentItem = () => {debugger
    //     return(
    //         props.items.filter(item => item.user.id == props.match.params.id)
    //     )
    //   }

const data = new FormData
data.append('item[user_id]', props.user.id)

    const handleChange= (event) => {
        data.append(`item${[event.target.name]}`, event.target.value)
    }

    const onImageChange = event => { 
        data.append(`item${[event.target.name]}`, event.target.files[0])

        // item.image = event.target.files[0];
      };

    const handleSubmit = (event) => {
        
        event.preventDefault()

        // const data = new FormData
        
        // data.append('item[user_id]', props.user.id)
        // data.append('item[category_id]', item.category.id)
        // data.append('item[name]', item.name)
        // data.append('item[condition]', item.condition)
        // data.append('item[description]', item.description)
        // data.append('item[price]', item.price)
        // data.append('item[image]', item.image)

        props.editItem(data, props.history)
      
        // setItem({
        //     category_id: 1,
        //     name: '',
        //     condition: 'New',
        //     description: '',
        //     price: '',
        //     image: null
        // })        
    }

      
        
        let categoriesList = categories.length > 0 && categories.map((category) => {
            return(
                <option key={category.id} value={category.id} selected={item.category.id==category.id}>{category.name} </option>
            )
        },this)
        
        return(
            <Container className="item-form" >
            <div>

                <br></br>
                <strong>Post new item:</strong><hr></hr>
    
                <Form onSubmit={handleSubmit}>
                 <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Item Name
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder={item.name} value={item.name} name="name" onChange={handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Category
                        </Form.Label>
                        <Col sm="10">
                            <select name="category_id" placeholder={item.category} onChange={handleChange} className="custom-select" >
                                    {categoriesList}
                            </select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Condition
                        </Form.Label>
                        <Col sm="10">
                            <select name="condition" onChange={handleChange} className="custom-select" >
                                {/* <option value={item.condition} selected>{item.condition}</option> */}
                                <option value="New"  selected={"New"==item.condition}>New</option>
                                <option value="Open box (never used)"  selected={"Open box (never used)"==item.condition}>Open box (never used)</option>
                                <option value="Reconditioned/Refurbished" selected={"Reconditioned/Refurbished"==item.condition}>Reconditioned/Refurbished</option>
                                <option value="Used (like new)" selected={"Used (like new)"==item.condition}>Used (like new)</option>
                                <option value="Used (normal wear)" selected={"Used (normal wear)"==item.condition}>Used (normal wear)</option>
                                <option value="Other (see description)" selected={"Other (see description)"==item.condition}>Other (see description)</option>
                            </select>      
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Description
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control as="textarea" rows={3} placeholder="Sell faster with a description!" value={item.description} name="description" onChange={handleChange}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                        Price
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="$0" value={item.price} name="price" onChange={handleChange} />
                        </Col>
                    </Form.Group>


                    <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />
 
                    <hr></hr>
                    <Button size="small" variant="outlined" color="primary" type="submit">
                        Post Item
                    </Button>
                </Form>
            </div>
            </Container>
        )
    }   


const mapitemToProps = item =>{
    return{
        categories: item.categories,
        items: item.items
    }
}

export default connect(mapitemToProps, { getItems, editItem, getCategories})(EditForm)
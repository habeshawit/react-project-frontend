import React from 'react'
import {connect} from 'react-redux'
import {addCategory} from '../actions/addCategory'

class CategoryInput extends React.Component {

    state = {name: ''}

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCategory(this.state)
        this.setState({
            name: ''
        })
    }

    render(){
        const sectionStyle = {
            // backgroundImage:
                // "url(https://wildheartmedia.com/wp-content/uploads/2016/06/blog-categories-and-tags-1200x675.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "700px",
            width: "1500px"
        };
        return(
            <div style={sectionStyle}>
                <form onSubmit={this.handleSubmit}>
                    <h1>Create a new category</h1>
                    <label>Category Name: </label>
                    <input type='text' placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

//null because we don't need to get anything from the store. just adding
export default connect(null, {addCategory})(CategoryInput);
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
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
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
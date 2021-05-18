import React from 'react'

//need to be a class so we can have a state and create controlled form
class ItemInput extends React.Component {

    // state = {
    //     name: '',
    //     description: '',


    // }

    // handleChange= (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    //     this.props.addItem(this.state)
    //     this.setState({
    //         name: ''
    //     })
    // }
    render(){
        return(
            <div>
                Add a new item:
              {/* <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Item Name: </label>
                    <input type='text' placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange}/>
                    <input type='submit'/>
                </form>
            </div> */}
            </div>
        )
    }
}

export default ItemInput;
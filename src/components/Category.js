import React from 'react'
// import {Redirect} from 'react-router-dom'
import ItemsContainer from '../containers/ItemsContainer'

const Category = (props) => {
    // debugger
    let category = props.categories.find(({id}) => id == props.match.params.id)
    // let category = props.categories.filter(category => category.id == props.match.params.id)[0]

    return (
        <div className="container">
           <h1>
               {/* {category ? null : <Redirect to='/categories'/>} */}
               {category ? category.name : null}
            </h1> 
            <ItemsContainer category={category} categories={props.categories}/>
        </div>
    )
}

export default Category;
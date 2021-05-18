import React from 'react'
// import {Redirect} from 'react-router-dom'
import ItemsContainer from '../containers/ItemsContainer'

const Category = (props) => {

    let category = props.categories.find(({id}) => id == props.match.params.id)

    return (
        <div>
           <h1>
               {/* {category ? null : <Redirect to='/categories'/>} */}
               {category ? category.name : null}
            </h1> 
            <ItemsContainer category={category}/>
        </div>
    )
}

export default Category;
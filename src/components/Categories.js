import React from 'react'
import Category from './Category'
import {Route, Link} from 'react-router-dom'

const Categories = (props) => {
    return(
        <div>
            {props.categories.map(category => 
                <div key={category.id}>
                    <Link to={`/categories/${category.id}`}>{category.name}</Link>
                </div>
            )}
        </div>
    )
}

export default Categories;
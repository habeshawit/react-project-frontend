import React from 'react'

const Category = (props) => {

    let category = props.categories[props.match.params.id - 1]
    
    return (
        <div>
           <li>
               {category ? category.name : null}
            </li> 
        </div>
    )
}

export default Category;
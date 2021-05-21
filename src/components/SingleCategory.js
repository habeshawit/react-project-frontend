import React from 'react'
import {NavLink, Link} from 'react-router-dom'


export default function SingleCategory(props) {
    // 
    return (
        // <div className="col">
        //     <div className = "card h-100" key={props.category.id}>
        //         <Link to={`/categories/${props.category.id}`}>{props.category.name}</Link>
        //     </div>
        // </div>
            
            <NavLink to={`/categories/${props.category.id}`} style={{ textDecoration: 'none' }}>
                <strong>{props.category.name}      |      </strong>
            </NavLink>

     
  
        
    )
}
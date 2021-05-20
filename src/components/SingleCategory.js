import React from 'react'
import {Route, Link} from 'react-router-dom'

export default function SingleCategory(props) {
    // 
    return (
        <div className="col">
            <div className = "card h-100" key={props.category.id}>
                <Link to={`/categories/${props.category.id}`}>{props.category.name}</Link>
            </div>
        </div>
        
    )
}
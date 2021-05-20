import React from 'react'
import {Route, Link} from 'react-router-dom'

export default function SingleItem(props) {
    // debugger
    return (
        <div className="col">
            <div className = "card h-100" >
                <center><h5>{props.item.name}</h5></center>
                <Link to={`/items/${props.item.name}`}><img src={props.item.image_url}  width="300" height="300"></img></Link>
            </div>
        </div>
        
    )
}
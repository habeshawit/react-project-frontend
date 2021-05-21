import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar(props) {
    // 
    return(
        
        <div>
            <br></br>
            
            <NavLink to="/">Home</NavLink> |
            <NavLink to="/items">Items for Sale</NavLink>  |
            <NavLink to="/items/new">Post Item</NavLink>  |  
            <br></br>
            {props.user.id? <div>Logged in as: {props.user.username}    |   <button onClick={props.handleLogout}>Logout</button></div> : null}          
        </div>
            
        // </ul>
    )
}

export default Navbar;
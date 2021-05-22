import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function NavBar(props) {
    // 
    return(
        
        <div>
            <br></br>
            
            <NavLink to="/">Home</NavLink> |
            <NavLink to="/items">Items for Sale</NavLink>  |
            <NavLink to="/items/new">Post Item</NavLink>  |  
            <br></br>
            {props.user.id? <div>Logged in as: {props.user.username}    |   <Button onClick={props.handleLogout}>Logout</Button></div> : null}          
        </div>
            
        // </ul>
    )
}

export default NavBar;
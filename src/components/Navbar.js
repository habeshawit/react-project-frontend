import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return(
        // <ul>
        <div>
            <NavLink to="/">Home</NavLink> |
            <NavLink to="/items">Items for Sale</NavLink>  |
            <NavLink to="/items/new">Post Item</NavLink>  |
        </div>
            
        // </ul>
    )
}

export default Navbar;
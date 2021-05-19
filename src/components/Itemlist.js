//functional component/ receives propls

import React from 'react'
import {Route, Link} from 'react-router-dom'


const Itemlist = (props) => {

    // debugger
    const renderItem =(categories) =>{


        return(
            
            <div class="container">
                {categories.map((category, index) => (
                    <div>
                        <hr></hr>
                        <h1>{category.name}</h1>
                    <div className= "row row-cols-1 row-cols-md-4 g-4" key={index}>
                        {/* <hr /> */}
                        
                        {category.items.map((item, i) => (
                            <div className="col">
                        <div className = "card h-100" key={i}>
                        <h4>{item.name}</h4>
                            <Link to={`/items/${item.name}`}><img src={item.image_url}  width="300" height="300"></img></Link>
                            
                            
                            
                        </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    ))}
                    
                </div>
        )
        
        
    }

    return (
        
        <div>
            <h2>All Items list</h2>
            {props.categories ? renderItem(props.categories) : null}
        </div>
    )
}

export default Itemlist;


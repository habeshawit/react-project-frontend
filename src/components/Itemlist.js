//functional component/ receives propls

import React from 'react'
import {Route, Link} from 'react-router-dom'

const Itemlist = (props) => {

    // debugger
    const renderItem =(categories) =>{
        return(
            <div>
                {categories.map((category, index) => (
                    <div key={index}>
                        <hr />
                        <h1>{category.name}</h1>
                        {category.items.map((item, i) => (
                        <div key={i}>
                            <Link to={`/items/${item.name}`}><img src={item.image_url} className="card-img-top" alt="..." id="image-box" data-toggle="modal" data-target="#exampleModalScrollable" data-id={item.id} width="350" height="350"></img></Link>
                            
                            <h3>{item.name}</h3>
                            
                        </div>
                        ))}
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


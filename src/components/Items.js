//functional component/ receives propls

import React from 'react'

const Items = (props) => {

    const renderItem =(items) =>{
        return(
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {items.map(item => 
                    <div className="col">
                        <div className="card h-100" key={item.id}>
                            
                            <h4 class="card-title">{item.name}</h4>
                            <img src={item.image_url} className="card-img-top" alt="..." id="image-box" data-toggle="modal" data-target="#exampleModalScrollable" data-id={item.id} width="350" height="350"></img>
                            <ul>
                                <li class="card-text">Item description:  {item.description}</li>
                                <li class="card-text">Quantity in stock: {item.qty}</li>
                                <li class="card-text">Unit Price: {item.price}</li>
                            </ul>
                            
                        </div>
                    </div>
            )}
            </div>
        )
        
        
    }

    return (

        <div>
            <h2>Items in Stock</h2>
            {props.items ? renderItem(props.items) : null}
        </div>
    )
}

export default Items;


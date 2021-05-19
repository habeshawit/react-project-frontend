//functional component/ receives propls

import React from 'react'

const Items = (props) => {

    const renderItem =(items) =>{
        return(
            <div>
                {items.map(item => 
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.image_url} className="card-img-top" alt="..." id="image-box" data-toggle="modal" data-target="#exampleModalScrollable" data-id={item.id} width="350" height="350"></img>
                        <ul>
                            <li>Item description:  {item.description}</li>
                            <li>Quantity in stock: {item.qty}</li>
                            <li>Unit Price: {item.price}</li>
                        </ul>
                        
                    </div>
                )}
            </div>
        )
        
        
    }

    return (

        <div>
            <h2>Items list</h2>
            {props.items ? renderItem(props.items) : null}
        </div>
    )
}

export default Items;


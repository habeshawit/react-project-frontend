//functional component/ receives propls

import React from 'react'

const Items = (props) => {
    
    
    // let category = props.categories.find(({id}) => id == props.match.params.id)
    // debugger

    const renderItem =(items) =>{
        return(
            <div>
                {items.map(item => 
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <img src={item.image_url} class="card-img-top" alt="..." id="image-box" data-toggle="modal" data-target="#exampleModalScrollable" data-id={item.id} width="350" height="350"></img>
                        <ul>
                            <strong>{item.description}</strong>
                            <li>Quantity: {item.qty}</li>
                            <li>Price: {item.price}</li>
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


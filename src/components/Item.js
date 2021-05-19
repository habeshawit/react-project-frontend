import React from 'react'
// import {Redirect} from 'react-router-dom'
import ItemsContainer from '../containers/ItemsContainer'
import Itemslist from '../containers/ItemlistContainer'

const Item = (props) => {

    let category = props.categories.length > 0 && props.categories.filter((category, i) => {
        return(
            category.items.find(({name}) => name === props.match.params.id)
        )
    },this)

    let item
    if(category[0]){item = category[0].items.find(({name}) => name === props.match.params.id)}

    const renderItem =(item) =>{
        return(
            <div>
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <img src={item.image_url} className="card-img-top" alt="..." id="image-box" data-id={item.id} width="350" height="350"></img>
                        <ul>
                            <li>Item description:  {item.description}</li>
                            <li>Quantity in stock: {item.qty}</li>
                            <li>Unit Price: {item.price}</li>
                        </ul>
                        
                    </div>
            </div>
        )
    }


    return (
        <div>
            {item ? renderItem(item) : null}
        </div>
    )
}

export default Item;
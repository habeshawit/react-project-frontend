//functional component/ receives propls

import React from 'react'

const AllItems = (props) => {

    debugger
    const renderItem =(items) =>{
        return(
            <div>
                showing all items
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

export default AllItems;


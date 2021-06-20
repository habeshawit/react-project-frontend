export const getItems = () => {
    return (dispatch) =>{
        fetch('http://localhost:3001/api/v1/items')
            .then((res) => res.json())
            .then((items) => 
                dispatch({
                    type: 'FETCH_ITEMS',
                    payload: items
                })
        )
    }   
}

export const createItem = (newItemData, history) =>{  
    return(dispatch) => {        
        fetch('http://localhost:3001/api/v1/items', {
            
            method: 'POST',
            body: newItemData
        })
        .then((response) => {
            
            if(response.ok){
                return response.json();
            } else {
                throw new Error(response.statusText);                
            }
        })
        .then((item) => 
            (dispatch({type: 'CREATE_ITEM', payload: item}),
            history.push(`/items/${item.item.id}`))
        )
        .catch((err) => {
            dispatch({
                type: 'ERROR', 
                payload: "Error posting item. Please enter all information"})
        })
        
            
    }
}

export const deleteItem = (itemId, history) => {
    return(dispatch) => {        
        fetch(`http://localhost:3001/api/v1/items/${itemId}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((item) => 
            (dispatch({type: 'DELETE_ITEM', payload: itemId})
            ,history.push('/items')
            )
        )
    }
}

export const editItem = (item, history) => {
    return(dispatch) => {        
        fetch(`http://localhost:3001/api/v1/items/${item.id}`, {
            method: 'PATCH'
        })
        .then((res) => res.json())
        .then((item) => 
            (dispatch({type: 'EDIT_ITEM', payload: item}),
            history.push(`/items/${item.id}`))
        )
    }
}
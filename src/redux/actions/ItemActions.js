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
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({item: newItemData})
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
            history.push('/items'))
        )
        .catch((err) => dispatch({type: 'ERROR', payload: 'Error creating item. Please enter all information correctly'}))
    }
}

export const deleteItem = (itemId, history) => {
    return(dispatch) => {
        
        fetch(`http://localhost:3001/api/v1/items/${itemId}`, {
            method: 'DELETE'
        })
        .then((res) => res.json())
        .then((item) => 
            (dispatch({type: 'DELETE_ITEM', payload: item}))
        )
    }
}
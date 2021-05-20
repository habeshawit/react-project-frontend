export const getItems = () => {

    return (dispatch) =>{
        fetch('http://localhost:3000/api/v1/items')
            .then((res) => res.json())
            .then((items) => 
                dispatch({
                    type: 'FETCH_ITEMS',
                    payload: items
                })
        )
    }
}

export const createItem = newItemData =>{
    // return(dispatch) => {
    //     fetch('http://localhost:3000/api/v1/items'), {
    //         method: 'POST',
    //         headers: {
    //             Accepts: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ item: newItemData}),
    //     }
    // }
    return(dispatch) => {
        
        fetch('http://localhost:3000/api/v1/items', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({item: newItemData})
        })
        .then(response => response.json())
        .then(category => dispatch({
            type: 'CREATE_ITEM',
            payload: category
        }))
        // debugger
    }
}




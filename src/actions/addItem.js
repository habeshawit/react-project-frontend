export const addItem = (item, categoryId) =>{

    return(dispatch) => {
        
        fetch(`http://localhost:3000/api/v1/categories/${categoryId}/items`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(category => dispatch({
            type: 'ADD_ITEM',
            payload: category
        }))
        // 
    }

}
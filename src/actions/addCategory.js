export const addCategory = (data) =>{

    return(dispatch) => {
        fetch('http://localhost:3001/api/v1/categories', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(category => dispatch({
            type: 'ADD_CATEGORY',
            payload: category
        }))
    }

}
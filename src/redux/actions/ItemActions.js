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
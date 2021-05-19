// import Categories from "../components/Categories"

export function fetchItemlist() {
    // debugger
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/items', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(items => dispatch({
            type: 'FETCH_ITEMLIST',
            payload: items
        }))
    }

}
export const getCategories = () => {
// 
    return (dispatch) =>{
        fetch('http://localhost:3001/api/v1/categories', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'GET', 
          }
        )
            .then((res) => res.json())
            .then((category) => 
                dispatch({
                    type: 'FETCH_CATEGORIES',
                    payload: category
                })                       
        ) }
}

export const getCategory = (CategoryId) => {
    // 
    return (dispatch) =>{
        fetch(`http://localhost:3001/api/v1/categories/${CategoryId}`)
            .then((res) => res.json())
            .then((category) => 
                dispatch({
                    type: 'FETCH_CATEGORIES',
                    payload: category
                })    
                   
        )
    }
}

export const createCategory = (newCategoryData, history) =>{

    return(dispatch) => {
        
        fetch('http://localhost:3001/api/v1/categories', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({category: newCategoryData})
        })
        .then((response) => {
            if(response.ok){
                return response.json();
            } else {
                throw new Error(response.statusText);
            }
        })
        .then((category) => 
            (dispatch({type: 'CREATE_CATEGORY', payload: category}),
            history.push('/categories'))
        )
        .catch((err) => dispatch({type: "ERROR", payload: ''}))
        
        // 
    }
}




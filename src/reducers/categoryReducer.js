export default function categoryReducer(state = {categories: []}, action){
    
    // 
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return{categories: action.payload} 
        case 'ADD_CATEGORY':
            return{...state, categories: [...state.categories, action.payload]}
        case 'ADD_ITEM':
            // return{...state, categories: [...state.categories, action.payload.category]}
            return{...state, categories: state.categories.map(category =>{
                if(category.id === action.payload.id){
                    return action.payload
                }
                else {
                    return category
                }
            })}
        default:
            return state
    }
        
}
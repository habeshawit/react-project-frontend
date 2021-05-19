export default function categoryReducer(state = {categories: []}, action){
    
    // debugger
    switch(action.type){
        case 'FETCH_CATEGORIES':
            return{categories: action.payload} 
        case 'ADD_CATEGORY':
            return{...state, categories: [...state.categories, action.payload]}
        case 'ADD_ITEM':
            return{...state, categories: [...state.categories, action.payload.category]}
        default:
            return state
    }
        
}
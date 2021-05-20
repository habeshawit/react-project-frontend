export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ITEMS':
            return action.payload
        case 'CREATE_ITEM':
            return [...state, action.payload]
        case 'DELETE_ITEM':
            return [...state, action.payload]
            // return{...state, items: [...state, action.payload]}
        default:
            return state;
    }
}
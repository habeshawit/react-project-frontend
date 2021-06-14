export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ITEMS':
            return action.payload
        case 'CREATE_ITEM':
            {
                alert(action.payload.message)
                return [...state, action.payload]
            }           
        case 'DELETE_ITEM':                 
            return state.filter(i => i.id != action.payload)
        case 'EDIT_ITEM':                 
            return [...state, action.payload]
        case 'ERROR':
            {
            alert(action.payload)
            return  [...state, action.payload]
            }
        default:
            return state;
    }
}
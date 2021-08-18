export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_TODOS' :
            return {
                ...state,
                todos: action.payload
            }
        case 'SET_PAGINATION' :
            return {
                ...state,
                currentPage: action.payload
            }
        case 'SET_ORDER' :
            return {
                ...state,
                order: action.payload
            }
     
        default:
            return state
    }
}
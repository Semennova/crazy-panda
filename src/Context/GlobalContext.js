import { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";



const initialState = {
    todos: [
        {userId: 1, id: 1, title: "delectus aut autem", completed: false},
        {userId: 2, id: 2, title: "blah blah blah", completed: true},
    ],
    pageSize: 50,
    currentPage: 1,
    order: 'ASC'
}

export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function setTodos(todos){
        dispatch({
            type: 'SET_TODOS',
            payload: todos
        })
    }

    function setPagination(pageNumber){
        dispatch({
            type: 'SET_PAGINATION',
            payload: pageNumber
        })
    }

    function setOrder(col){
        dispatch({
            type: 'SET_ORDER',
            payload: col
        })
    }



    return <GlobalContext.Provider value={
        {todos: state.todos,
         pageSize: state.pageSize,
         currentPage: state.currentPage,
         order: state.order,
         setPagination,
         setTodos,
         setOrder
        }
    }>
        {children}
    </GlobalContext.Provider>
}
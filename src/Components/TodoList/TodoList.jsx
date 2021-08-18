import React, { useEffect, useContext, useState, useMemo } from 'react'
import { getTodos } from '../../api/api'
import { GlobalContext } from '../../Context/GlobalContext'
import { Filter } from '../Filter/Filter'
import { Paginator } from '../Paginator/Paginator'
import { Info } from './TableHeader/Info/Info'
import { TableHeader } from './TableHeader/TableHeader'
import s from './TodoList.module.css'
 

export const TodoList = () => {
    const {setTodos, todos, pageSize, currentPage} = useContext(GlobalContext);
    const [searchTerm, setSearchTerm] = useState('')
    

    
    useEffect(()=>{
       (async () => {
            let response = await getTodos();
            setTodos(response.data)
        })()
    }, []);
    
    const indexOfLastTodo = currentPage * pageSize;
    const indexofFirstTodo = indexOfLastTodo - pageSize;
    const currentTodos = todos.slice(indexofFirstTodo, indexOfLastTodo);


    return (
    <>
    <div className={s.flex}>
            <Paginator /> 
            <Filter setSearchTerm={setSearchTerm}/>
            <Info />
    </div>

        <table className={s.table}>
            <TableHeader />
         
            <tbody className={s.tableBody}> 
                    {currentTodos.filter(val => {
                        if(searchTerm === ''){
                            return val
                        } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                    }).map(todo => (
                        <tr key={todo.id} className={s.tableRow}>
                            <td className={`${s.userId} ${s.data}`}>{todo.userId}</td>
                            <td className={`${s.id} ${s.data}`}>{todo.id}</td>
                            <td className={`${s.title} ${s.data}`}>{todo.title}</td>
                            <td className={`${s.completed} ${s.data}`}>{todo.completed === true ? 'true' : 'false'}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </>
    )
}

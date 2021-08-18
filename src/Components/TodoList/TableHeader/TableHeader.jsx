import React, { useContext, useState } from 'react'
import s from './TableHeader.module.css'
import { GlobalContext } from '../../../Context/GlobalContext'

export const TableHeader = () => {

    const {setTodos, todos, order, setOrder} = useContext(GlobalContext);

    const sorting = (col) => {
        if(order === 'ASC') {
            const sorted = [...todos]
            .sort((a,b)=> (
                a[col] > b[col] ? 1 : -1
            ));
            setTodos(sorted)
            setOrder('DSC')    
        }

        if(order === 'DSC') {
            const sorted = [...todos]
            .sort((a,b)=> (
                a[col] < b[col] ? 1 : -1
            ));
            setTodos(sorted)
            setOrder('ASC')
            
        }
    }
 
    return (

            <thead>
                <th>
                    <button onClick={()=> sorting('userId')} className={s.tableHeaderItem}>userId</button>
                </th>
                <th>
                    <button onClick={()=> sorting('id')} className={s.tableHeaderItem}>Id</button>
                </th>
                <th>
                    <button onClick={()=> sorting('title')} className={s.tableHeaderItem}>title</button>
                </th>
                <th>
                    <button onClick={()=> sorting('completed')} className={s.tableHeaderItem}>completed</button>
                </th>
            
            </thead>

    )
}

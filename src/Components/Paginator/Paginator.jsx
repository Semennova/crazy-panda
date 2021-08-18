import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext'
import s from './Paginator.module.css'

export const Paginator = () => {
    const {todos, pageSize, setPagination, currentPage} = useContext(GlobalContext)
    const pages = [];
    for(let i = 1; i <= Math.ceil(todos.length / pageSize); i++){
        pages.push(i)
    }

    const onPageChange = (pageNumber) => {
        setPagination(pageNumber)
    }


    return (
        <div className={s.pages}>
            {pages.map(p => (
                <span key={p} className={p === currentPage ? s.currentPageStyle : s.pageStyle} onClick={()=> onPageChange(p)}>{p}</span>
            ))}
        </div>
    )
}

import React from 'react'
import s from './Filter.module.css'

export const Filter = ({setSearchTerm}) => {
    return (
        <div>
            Title search: <input className={s.input} type='text' onChange={(e)=> setSearchTerm(e.target.value)}/>
        </div>
    )
}

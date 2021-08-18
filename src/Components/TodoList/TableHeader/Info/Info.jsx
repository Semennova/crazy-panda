import React, { useContext } from 'react'
import { GlobalContext } from '../../../../Context/GlobalContext'


export const Info = () => {
    const { currentPage, order} = useContext(GlobalContext);
    return (
        <div>
           Todos page <b>{currentPage}</b> sorted <b>{order}</b>
        </div>
    )
}

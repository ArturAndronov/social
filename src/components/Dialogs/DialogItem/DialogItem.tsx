import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
    id: number
    name: string
}

const DialogItem:React.FC<PropsType> = (props) => {
    return (
        <div>
            <div>
                {/* конкатинация строк */}
                <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? s.active : s.dialogs}><img className={s.dialogItem} src={props.img} alt='dialog'/>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;
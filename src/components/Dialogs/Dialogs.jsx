import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div>
            <div>
                           {/* конкатинация строк */}
                <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
            </div>
        </div>
    )
}

const Message = (props) => {
    return(
    <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Arthur" id="1" />
                <DialogItem name="Ivan" id="2" />
                <DialogItem name="Evgeniy" id="3" />
                <DialogItem name="Alexandr" id="4" />
                <DialogItem name="Andrew" id="5" />
                <DialogItem name="Vladimir" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you"/>
                <Message message="Wassup"/>
            </div>
        </div>
    )
}
export default Dialogs;
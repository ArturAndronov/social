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
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Arthur' },
        { id: 2, name: 'Ivan' },
        { id: 3, name: 'Evgeniy' },
        { id: 4, name: 'Alexandr' },
        { id: 5, name: 'Andrew' },
        { id: 6, name: 'Vladimir' },
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Wassup ' },
        { id: 4, message: 'good' },
        { id: 5, message: 'job' },
        { id: 6, message: 'asff' },
    ]
    let dialogsElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages
        .map((m) => <Message message={m.message} id={m.id} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs;
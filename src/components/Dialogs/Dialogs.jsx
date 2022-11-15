import React from 'react'
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Arthur
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Evgeniy
                </div>
                <div className={s.dialog}>
                    Alexandr
                </div>
                <div className={s.dialog}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Vladimir
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Wassup</div>
            </div>
        </div>
    )
}
export default Dialogs;
import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map((d) => <DialogItem img= {d.img} name={d.name} id={d.id} />);

    let messagesElements = props.state.messages
        .map((m) => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef();
    
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    } 
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}
export default Dialogs;
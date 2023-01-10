import React from 'react'
import s from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { Navigate } from 'react-router-dom'

const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => <DialogItem img={d.img} name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map((m) => <Message message={m.message} id={m.id} key={m.id} />)
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = (event) => {
        let body = event.target.value;
        props.UpdateNewMessageBody(body);
    }

    if (!props.isAuth) return <Navigate to={"/login"} />;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea placeholder='Enter your message' onChange={onMessageChange} ref={newMessageElement} value={newMessageBody}></textarea></div>
                    <div><button onClick={sendMessage}>Отправить</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.tsx";
import Message from "./Message/Message.tsx";
import AddMessageForm from "./AddMessageForm/AddMessageForm.tsx"
import { InitialStateType } from '../../redux/dialogs-reducer';

type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (messageText: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
  }

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );
    // let newMessageBody = state.newMessageBody;

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
 
            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}


export default Dialogs;
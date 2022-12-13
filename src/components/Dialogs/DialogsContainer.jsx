import React from 'react'
import { sendMessageCreator, UpdateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs'

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let sendMessage = () => {
                        store.dispatch(sendMessageCreator());
                    }
                    let onMessageChange = (body) => {
                        store.dispatch(UpdateNewMessageBodyCreator(body));
                    }

                    return <Dialogs UpdateNewMessageBody={onMessageChange} sendMessage={sendMessage} dialogsPage={state} />
                }
            }
        </StoreContext.Consumer>

    )
}
export default DialogsContainer;
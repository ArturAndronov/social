import React from 'react'
import { connect } from 'react-redux';
import { sendMessageCreator, UpdateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        UpdateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        sendMessage: (body) => { 
            dispatch(UpdateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
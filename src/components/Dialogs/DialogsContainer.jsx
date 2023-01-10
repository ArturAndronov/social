import React from 'react'
import { connect } from 'react-redux';
import { sendMessageCreator, UpdateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        UpdateNewMessageBody: (body) => { 
            dispatch(UpdateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
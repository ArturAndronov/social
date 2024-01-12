import { FormAction } from "redux-form";
import { BaseThunkType, InferActionsTypes } from "./redux-store.ts";
import { ChatMessageType, chatAPI } from "../api/chat-api.ts";
import { Dispatch } from "redux";

let initialState = {
    messages: [] as ChatMessageType[],
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null  //if null , then captcha is not required
};

const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEVIED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }

        default:
            return state;
    }

}

export const actions = {
    messagesReceived: (messages: ChatMessageType[]) => ({
        type: 'SN/chat/MESSAGES_RECEVIED', payload: { messages }
    } as const)
}
let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if(_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}


export default chatReducer;

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>
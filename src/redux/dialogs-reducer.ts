import { InferActionsTypes } from "./redux-store";

type DialogType = {
    id: number
    name: string
    img: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Wassup ' },
        { id: 4, message: 'good' },
        { id: 5, message: 'job' },
        { id: 6, message: 'asff' }
    ] as Array<MessageType>,
    dialogs: [
        { id: 1, name: 'Arthur', img: 'https://cdn-icons-png.flaticon.com/512/74/74291.png' },
        { id: 2, name: 'Ivan', img: 'https://cdn-icons-png.flaticon.com/512/53/53154.png' },
        { id: 3, name: 'Evgeniy', img: 'https://cdn-icons-png.flaticon.com/512/53/53081.png' },
        { id: 4, name: 'Alexandr', img: 'https://cdn-icons-png.flaticon.com/512/56/56990.png' },
        { id: 5, name: 'Andrew', img: 'https://cdn-icons-png.flaticon.com/512/53/53092.png' },
        { id: 6, name: 'Vladimir', img: 'https://cdn-icons-png.flaticon.com/512/53/53092.png' }
    ] as Array<DialogType>
};

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            };
        default:
            return state;
    }

}

export const actions = {
    sendMessageCreator: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND-MESSAGE',newMessageBody} as const)
}


export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Wassup ' },
        { id: 4, message: 'good' },
        { id: 5, message: 'job' },
        { id: 6, message: 'asff' }
    ],
    dialogs: [
        { id: 1, name: 'Arthur', img: 'https://cdn-icons-png.flaticon.com/512/74/74291.png' },
        { id: 2, name: 'Ivan', img: 'https://cdn-icons-png.flaticon.com/512/53/53154.png' },
        { id: 3, name: 'Evgeniy', img: 'https://cdn-icons-png.flaticon.com/512/53/53081.png' },
        { id: 4, name: 'Alexandr', img: 'https://cdn-icons-png.flaticon.com/512/56/56990.png' },
        { id: 5, name: 'Andrew', img: 'https://cdn-icons-png.flaticon.com/512/53/53092.png' },
        { id: 6, name: 'Vladimir', img: 'https://cdn-icons-png.flaticon.com/512/53/53092.png' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return{
                ...state,
                messages: [...state.messages, { id: 7, message: body }]
            };
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
})


export default dialogsReducer;
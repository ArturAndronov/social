const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCounts: '15' },
        { id: 2, message: 'It\'s my first post', likesCounts: '20' },
        { id: 3, message: 'sagasgasgasgasgas', likesCounts: '24' },
        { id: 4, message: 'bbbbbbbbbbbbbbbbbbb', likesCounts: '266' }
    ],
    newPostText: 'Новый пост'
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCounts: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };

        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const UpdateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default usersReducer;
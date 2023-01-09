import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCounts: '15' },
        { id: 2, message: 'It\'s my first post', likesCounts: '20' },
        { id: 3, message: 'sagasgasgasgasgas', likesCounts: '24' },
        { id: 4, message: 'bbbbbbbbbbbbbbbbbbb', likesCounts: '266' }
    ],
    newPostText: 'Новый пост',
    profile: null
};

const profileReducer = (state = initialState, action) => {
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
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
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

export const setUsersProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const getUsersProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data));
    });
}


export default profileReducer;
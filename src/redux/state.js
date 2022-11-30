let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCounts: '15' },
                { id: 2, message: 'It\'s my first post', likesCounts: '20' },
                { id: 3, message: 'sagasgasgasgasgas', likesCounts: '24' },
                { id: 4, message: 'bbbbbbbbbbbbbbbbbbb', likesCounts: '266' }
            ],
            newPostText: 'Новый пост'
        },
        dialogsPage: {
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
        }

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state change');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCounts: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;   //patern
    }

}

export default store;
window.store = store;
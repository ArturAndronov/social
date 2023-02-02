import profileReducer, { addPostActionCreator } from "./profile-reducer";
import React from "react";

it('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("Artyr.ru");
    let state = {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCounts: '15' },
            { id: 2, message: 'It\'s my first post', likesCounts: '20' },
            { id: 3, message: 'sagasgasgasgasgas', likesCounts: '24' },
            { id: 4, message: 'bbbbbbbbbbbbbbbbbbb', likesCounts: '266' }
        ]
    };
    // 2. create action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
});


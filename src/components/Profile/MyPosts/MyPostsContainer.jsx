import React from 'react'
import { connect } from 'react-redux';
import { UpdateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    UpdateNewPostText: (text) => {
      dispatch(UpdateNewPostTextActionCreator(text));
    },
    addPost: (body) => {
      dispatch(addPostActionCreator(body));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
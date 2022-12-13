import React from 'react'
import { UpdateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          let addPost = () => {
            store.dispatch(addPostActionCreator());
          }

          let onPostChange = (text) => {
            let action = UpdateNewPostTextActionCreator(text);
            store.dispatch(action);
          }

          return <MyPosts UpdateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
        }
      }
    </StoreContext.Consumer>
  )
}
export default MyPostsContainer;
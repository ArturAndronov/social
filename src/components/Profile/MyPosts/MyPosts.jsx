import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hi, how are you?' , likesCounts:'15'},
    { id: 2, message: 'It\'s my first post' , likesCounts:'20'},
    { id: 3, message: 'sagasgasgasgasgas' , likesCounts:'24'},
    { id: 4, message: 'bbbbbbbbbbbbbbbbbbb' , likesCounts:'266'},
]

  let postsElement = posts
  .map( p => <Post message={p.message} likesCounts={p.likesCounts} />)
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}
export default MyPosts;
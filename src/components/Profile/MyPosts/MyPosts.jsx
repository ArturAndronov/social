import React from 'react'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo(props => {
    let postsElement =
      props.posts.map(p => <Post message={p.message} likesCounts={p.likesCounts} />)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
      props.addPost(values.newPostText);
    }

    return (
      <div className={s.postBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={s.posts}>
          {postsElement}
        </div>
      </div>
    )
  });


const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="newPostText" component={Textarea} placeholder="Post message" validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;
import React from 'react'
import s from './Post.module.css';

type PropsType = {
  message: string
  likesCounts: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-men-300x300.png' alt='Personal post'></img>
        {props.message}
        <div>
          <span>like {props.likesCounts}</span>
        </div>
      </div>
    </div>
  )
}
export default Post;
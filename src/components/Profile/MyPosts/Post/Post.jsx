import s from './Post.module.css';
const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img src='https://muratselek.com.tr/wp-content/uploads/2019/01/yorum-icon-avatar-men-300x300.png'></img>
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  )
}
export default Post;
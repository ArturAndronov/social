import React from 'react'
import s from './Post.module.css';

import { useSelector } from 'react-redux';

import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type PropsType = {
  message: string
  likesCounts: number
}


const Post: React.FC<PropsType> = (props) => {
  const profile = useSelector((state: any) => state.profilePage.profile);
  return (
    <div>
      <div className={s.item}>
     { profile?.photos?.large 
                                ? <img 
                                    src={profile.photos.large} 
                                    className={s.mainPhoto} 
                                    alt='AvatarPost' 
                                    style={{ 
                                        width: '60px', 
                                        height: '60px', 
                                       
                                    }}
                                  />
                                : <Avatar 
                                    alt={'AvatarPost'} 
                                    style={{ backgroundColor: '#87d068' }} 
                                    icon={<UserOutlined />} 
                                    
                                    size={60} // Задать размер 15x15
                                  />}

        {props.message}
        <div>
          <span>like {props.likesCounts}</span>
        </div>
      </div>
    </div>
  )
}
export default Post;
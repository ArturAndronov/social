import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer.tsx';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.tsx';
import { ProfileType } from '../../types/types.ts';

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        saveProfile={props.saveProfile}
        updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;
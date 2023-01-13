import React from 'react'
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if(!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <ProfileStatus status={"hello"}/>
      </div>

    </div>
  )
}
export default ProfileInfo;
import React from 'react';
import s from './style.module.css'

const ProfileInfo = (props) => {
  return(
    <div className={s.profile_info}>
        <div className={s.data}>
          <p className={s.username}>
            {props.username}
          </p>
          <span className={s.about}>
            {props.about}
          </span>
        </div>
    </div>
  )
}

export default ProfileInfo;
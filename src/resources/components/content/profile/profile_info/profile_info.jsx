import React from 'react';
import s from './style.module.css';

import {ProfileStatus} from './profile_status/profile_status.jsx';

const ProfileInfo = (props) => {
  return(
    <div className={s.profile_info}>
        <div className={s.data}>
          <p className={s.username}>
            {props.username}
          </p>
          <ProfileStatus updateProfileStatus={props.updateProfileStatus} profileStatus={props.profileStatus}/>
        </div>
    </div>
  )
}

export default ProfileInfo;
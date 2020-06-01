import React from 'react';

// components import
import Avatar from '../../avatar/avatar.jsx';
import PostListContainer from './profile_post/post_list/post_list_container.jsx';
import CreatePostContainer from './profile_post/create_post_area/create_post_container.jsx';
import ProfileInfo from './profile_info/profile_info.jsx';

// styles import
import s from './profile-style.module.css';
import Preloader from '../../generic/preloader/preloader.jsx';

const Profile = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return(
    <div className={s.profile_content}>
      <div className={s.narrow_block}>
        <Avatar src={props.profile.photos.large} type='main'/>
      </div>
      <div className={s.wide_block}>
        <ProfileInfo about={props.profile.aboutMe} username={props.profile.fullName}/>
        <CreatePostContainer/>
        <PostListContainer/>
      </div>
    </div>
  )
}

export default Profile;
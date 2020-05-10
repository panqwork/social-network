import React from 'react';
import Avatar from '../../avatar/avatar';

import PostListContainer from './profile_post/post_list/post_list_container';
import CreatePostContainer from './profile_post/create_post_area/create_post_container'

import s from './profile-style.module.css'


const Profile = (props) => {
  return(
    <div className={s.profile_content}>
      <div className={s.narrow_block}>
        <Avatar type='main'/>
      </div>
      <div className={s.wide_block}>
        <CreatePostContainer/>
        <PostListContainer/>
      </div>
    </div>
  )
}

export default Profile;
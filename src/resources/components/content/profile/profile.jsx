import React from 'react';
import Avatar from './profile_avatar/avatar';
import CreatePost from './profile_post/create_post_area/create_post';
import PostList from './profile_post/post_list/post_list';

import s from './profile-style.module.css'


const Profile = (props) => {
  return(
    <div className={s.profile_content}>
      <div className={s.narrow_block}>
        <Avatar/>
      </div>
      <div className={s.wide_block}>
        <CreatePost currentInputText={props.userProfile.currentInputText} dispatch={props.dispatch} />
        <PostList userPosts={props.userProfile.userPosts}/>
      </div>
    </div>
  )
}

export default Profile;
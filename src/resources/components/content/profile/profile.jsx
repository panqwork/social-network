import React from 'react';
import Avatar from '../../avatar/avatar';
import CreatePost from './profile_post/create_post_area/create_post';
import PostList from './profile_post/post_list/post_list';

import s from './profile-style.module.css'
import {addPostAtcionCreator,changePostInputTextActionCreator} from '../../../../redux/reducer/profileReducer'


const Profile = (props) => {
  let state = props.store.getState()
  return(
    <div className={s.profile_content}>
      <div className={s.narrow_block}>
        <Avatar type='main'/>
      </div>
      <div className={s.wide_block}>
        <CreatePost currentInputText={state.userProfile.currentInputText} updateTextarea={(text)=>{props.store.dispatch(changePostInputTextActionCreator(text))}} addPost={()=>{props.store.dispatch(addPostAtcionCreator())}} />
        <PostList userPosts={state.userProfile.userPosts}/>
      </div>
    </div>
  )
}

export default Profile;
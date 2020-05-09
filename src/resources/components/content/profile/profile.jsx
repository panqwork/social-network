import React from 'react';
import Avatar from '../../avatar/avatar';
import CreatePost from './profile_post/create_post_area/create_post';
import PostList from './profile_post/post_list/post_list';

import s from './profile-style.module.css'

import StoreContext from '../../../../contextAPI/store_context';
import {changePostInputTextActionCreator,addPostAtcionCreator} from '../../../../redux/reducer/profileReducer'


const Profile = () => {
  return(
    <StoreContext.Consumer> 
      { 
        (store) => {
          let state = store.getState();
          return(<div className={s.profile_content}>
            <div className={s.narrow_block}>
              <Avatar type='main'/>
            </div>
            <div className={s.wide_block}>
              <CreatePost addPost={()=>{store.dispatch(addPostAtcionCreator())}} changeInputText={(text)=>{store.dispatch(changePostInputTextActionCreator(text))}} currentInputText={state.userProfile.currentInputText}/>
              <PostList userPosts={state.userProfile.userPosts}/>
            </div>
          </div>)
        }
      }
    </StoreContext.Consumer>
  )
}

export default Profile;
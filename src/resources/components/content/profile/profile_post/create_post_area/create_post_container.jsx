import React from 'react';
// components import
import {
  addPost
} from '../../../../../../redux/reducer/profileReducer.js';

// modules import
import {connect} from 'react-redux';

// components import
import Button from '../../../../generic/button/button.jsx'

// styles import
import s from './create-post-style.module.css';

import { Field, reduxForm } from 'redux-form';


const InputPostArea = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field className={s.create_post} placeholder="Что у вас нового?" component={'textarea'} type={'text'} name={'postText'}/>
      <Button>Опубликовать</Button>
    </form>
  )
}

const PostArea = reduxForm({
  form: 'create_post'
})(InputPostArea);

const CreatePost = (props) => {
  const onSubmitForm = (dataForm) => {
    props.addPost(dataForm.postText)
  }
  return(
    <div className={s.create_post_area}>
      <PostArea onSubmit={onSubmitForm}/>
    </div>
  )
}

const mapStateToProps = (state) => ({}) 
const mapDispatchToProps = (dispatch) => {
  return({
    addPost: (postText)=>{
      dispatch(addPost(postText))
    }
  })
}

export const CreatePostContainer = connect(mapStateToProps,mapDispatchToProps)(CreatePost)


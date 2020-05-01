import React from 'react';
import s from './create-post-style.module.css';
import Button from '../../../../generic/button/button'

import {changeInputTextActionCreator,addPostAtcionCreator} from '../../../../../../redux/store'

const createPost = (props) => {
  let textArea = React.createRef();
  let publishPost = ()=>{
    if(textArea.current.value) {
      props.dispatch(addPostAtcionCreator());
    }
  }
  let changeInputText = ()=>{
    props.dispatch(changeInputTextActionCreator(textArea.current.value))
  }
  return(
    <div className={s.create_post_area}>
      <textarea onChange={changeInputText} value={props.currentInputText} ref={textArea} placeholder="Что у вас нового?"></textarea>
      <Button clickEvent={publishPost}>Опубликовать</Button>
    </div>
  )
}

export default createPost;
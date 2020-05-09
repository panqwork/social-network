import React from 'react';
import s from './create-post-style.module.css';
import Button from '../../../../generic/button/button'


const createPost = (props) => {
  
  let textArea = React.createRef();
  let publishPost = ()=>{
    if(textArea.current.value) {
      props.addPost()
    }
  }
  let onChangeText = (e) => {
    props.changeInputText(e.target.value);
  }
  return(
    <div className={s.create_post_area}>
      <textarea className={s.create_post} onChange={onChangeText} value={props.currentInputText} ref={textArea} placeholder="Что у вас нового?"></textarea>
      <Button clickEvent={publishPost}>Опубликовать</Button>
    </div>
  )
}

export default createPost;
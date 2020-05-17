import React from 'react';

// styles import
import s from './create-post-style.module.css';

// components import
import Button from '../../../../generic/button/button.jsx'

const createPost = (props) => {
  let textArea = React.createRef();
  
  let publishPost = ()=>{
      props.addPost()
  }
  let onChnageText = (e)=>{
    props.updateTextarea(e.target.value);
  }
  return(
    <div className={s.create_post_area}>
      <textarea className={s.create_post} onChange={onChnageText} value={props.currentInputText} ref={textArea} placeholder="Что у вас нового?"></textarea>
      <Button clickEvent={publishPost}>Опубликовать</Button>
    </div>
  )
}

export default createPost;
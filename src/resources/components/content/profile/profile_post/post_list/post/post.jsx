import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './post-style.module.css'

// components
import Avatar from '../../../../../avatar/avatar';


const Post = (props) => {
  return(
    <div className={s.post_item}>
      <div className={s.post_head}>
        <Avatar type='post'/>
        <div className='post_info'>
          <div className={s.author}>
            {props.author}
          </div>
          <div className={s.date}>
            {props.date}
          </div>
        </div>
      </div>
      <div className={s.post_content}>
        <div className='content_image'></div>
        <div className='content_text'>
          {props.text}
        </div>
      </div>
      <div className={s.post_tool}>
        <div className={s.tool_item}>
          <FontAwesomeIcon className={s.up} icon='angle-up'/>
          <div className={s.count}>0</div>
          <FontAwesomeIcon className={s.down} icon='angle-up' rotation={180}/>
        </div>
      </div>
    </div>
  )
}

export default Post;
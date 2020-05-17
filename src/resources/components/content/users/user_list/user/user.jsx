import React from 'react';

// styles import 
import s from './style.module.css';

// component import 
import Avatar from '../../../../avatar/avatar.jsx';
import Button from '../../../../generic/button/button.jsx';


const User = (props) => {
  return(
    <div className={s.user}>
      <Avatar src={props.src} type='list'/>
      <div className={s.user_info}>
        <div className={s.data}>
          {props.username}
        </div>
        <div className={s.about}>
          {props.status}
        </div>
      </div>
      <div className={s.tools}>
        {props.followed ? 
          <Button clickEvent={()=>{props.unfollow(props.id)}}>Отписаться</Button> : <Button clickEvent={()=>{props.follow(props.id)}}>Подписаться</Button>}
      </div>
    </div>
  )
}

export default User;
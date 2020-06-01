import React from 'react';

// styles import 
import s from './style.module.css';

// component import 
import Avatar from '../../../avatar/avatar.jsx';
import Button from '../../../generic/button/button.jsx';

import {NavLink} from 'react-router-dom';


const User = (props) => {
  return(
    <div className={s.user}>
      <Avatar src={props.photo} type='list'/>
      <div className={s.user_info}>
        <div className={s.data}>
          <NavLink to={'profile/' + props.id}>{props.username}</NavLink>
        </div>
        <div className={s.about}>
          {props.status}
        </div>
      </div>
      <div className={s.tools}>
        {props.followed ? 
          <Button disabled={props.followingItems.some(item => item === props.id)} clickEvent={(e)=>{
            props.followSwitch('delete', props.id)
          }}>Отписаться</Button> 
          : <Button disabled={props.followingItems.some(item => item === props.id)} clickEvent={(e)=>{props.followSwitch('post', props.id)}}>Подписаться</Button>}
      </div>
    </div>
  )
}

export default User;
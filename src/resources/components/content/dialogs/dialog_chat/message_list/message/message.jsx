import React from 'react';

// components import
import Avatar from '../../../../../avatar/avatar.jsx';

// styles import
import s from './message.module.css';

const Message = (props) => {
  return (
    <div className={s.message}>
      <Avatar type='message' />
      <div>
        <div className={s.author}>
          {props.sender}
        </div>
        <div className={s.text}>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default Message;
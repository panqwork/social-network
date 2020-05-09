import React from 'react';

import s from './list.module.css';

//component 
import Message from './message/message';

const MessageList = (props) => {
  const msgs = props.messages.map((e)=><Message sender={e.sender} text={e.text}/>)
  return(
    <div className={s.message_list}>
      {msgs}
    </div>
  )
}

export default MessageList
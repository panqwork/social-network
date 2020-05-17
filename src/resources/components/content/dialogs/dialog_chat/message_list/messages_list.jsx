import React from 'react';

// styles import
import s from './list.module.css';

//components import 
import Message from './message/message.jsx';

const MessageList = (props) => {
  const msgs = props.messages.map((e)=><Message key={e.id} sender={e.sender} text={e.text}/>)
  return(
    <div className={s.message_list}>
      {msgs}
    </div>
  )
}

export default MessageList;
import React from 'react';
import s from './chat.module.css'

//component 
import MsgList from './message_list/messages_list'
import SendMsg from './send_message/send_msg';

const DialogChat = (props) => {
  return (
    <div className={s.chat}>
      <MsgList messages={props.userMessages.messages}/>
      <SendMsg userMessages={props.userMessages} dispatch={props.dispatch}/>
    </div>
  )
}

export default DialogChat;
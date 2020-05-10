import React from 'react';
import s from './chat.module.css'

//component 
import MessageListContainer from './message_list/message_list_container'
import SendMsgContainer from './send_message/send_msg_container';



const DialogChat = () => {
  return (
    <div className={s.chat}>
      <MessageListContainer/>
      <SendMsgContainer/>
    </div>
  )
}

export default DialogChat;
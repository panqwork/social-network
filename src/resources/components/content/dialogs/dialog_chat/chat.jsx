import React from 'react';

// styles imports
import s from './chat.module.css'

//components import 
import MessageListContainer from './message_list/message_list_container.jsx';
import SendMsgContainer from './send_message/send_msg_container.jsx';

const DialogChat = () => {
  return (
    <div className={s.chat}>
      <MessageListContainer/>
      <SendMsgContainer/>
    </div>
  )
}

export default DialogChat;
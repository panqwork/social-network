import React from 'react';
import s from './chat.module.css'

//component 
import MsgList from './message_list/messages_list'
import SendMsg from './send_message/send_msg';

import {changeMsgInputTextActionCreator, sendMsgActionCreator} from '../../../../../redux/reducer/messageReducer'


const DialogChat = (props) => {
  let state = props.store.getState()
  return (
    <div className={s.chat}>
      <MsgList messages={state.userMessages.messages}/>
      <SendMsg currentInputText={state.userMessages.currentInputText} sendMsg={()=>{props.store.dispatch(sendMsgActionCreator())}} changeTextarea={(text)=>{props.store.dispatch(changeMsgInputTextActionCreator(text))}}/>
    </div>
  )
}

export default DialogChat;
import React from 'react';
import s from './chat.module.css'

//component 
import MsgList from './message_list/messages_list'
import SendMsg from './send_message/send_msg';
import storeContext from '../../../../../contextAPI/store_context';

import {changeMsgInputTextActionCreator, sendMsgActionCreator} from '../../../../../redux/reducer/messageReducer'


const DialogChat = (props) => {
  return(
    <storeContext.Consumer>
      {
        (store) => {
          let state = store.getState()
          console.log(state);
          return (
            <div className={s.chat}>
              <MsgList messages={state.userMessages.messages}/>
              <SendMsg currentTextInput={state.userMessages.currentInputText} changeInputText={(text)=>{store.dispatch(changeMsgInputTextActionCreator(text))}} sendMessage={()=>{store.dispatch(sendMsgActionCreator())}}/>
            </div>
          )
        }
      }
      
    </storeContext.Consumer>
  )
  
}

export default DialogChat;
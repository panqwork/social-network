import React from 'react';
import s from './dialog.module.css';

//components 
import DialogList from './dialog_list/dialog_list'
import DialogChat from './dialog_chat/chat'



const Dialogs = (props) => {
  return (
    <div className={s.messages_content}>
      <DialogList dialogList={props.userMessages.dialogs}/>
      <DialogChat userMessages={props.userMessages} dispatch={props.dispatch}/>
    </div>
  )
}

export default Dialogs;
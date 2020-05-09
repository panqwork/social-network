import React from 'react';
import s from './dialog.module.css';

//components 
import DialogList from './dialog_list/dialog_list'
import DialogChat from './dialog_chat/chat'



const Dialogs = (props) => {
  let state = props.store.getState()
  return (
    <div className={s.messages_content}>
      <DialogList dialogList={state.userMessages.dialogs}/>
      <DialogChat store={props.store}/>
    </div>
  )
}

export default Dialogs;
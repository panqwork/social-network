import React from 'react';

// styles import
import s from './dialog.module.css';

// components import
import DialogListContainer from './dialog_list/dialog_list_container.jsx';
import DialogChat from './dialog_chat/chat.jsx';



const Dialogs = (props) => {
  return (
    <div className={s.messages_content}>
      <DialogListContainer/>
      <DialogChat />
    </div>
  )
}

export default Dialogs;
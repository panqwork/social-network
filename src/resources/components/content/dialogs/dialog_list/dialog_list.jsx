import React from 'react';

// styles import
import s from './dialog-list.module.css';

//components import
import Dialog from './dialog/dialog.jsx';



const DialogList = (props) => {
  let dialog_item = props.dialogList.map((e)=><Dialog key={e.id} name={e.sender}/>)
  return (
    <div className={s.dialog_list}>
      {dialog_item}
    </div>
  )
}

export default DialogList;
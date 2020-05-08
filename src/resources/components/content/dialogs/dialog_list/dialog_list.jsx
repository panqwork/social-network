import React from 'react';

import s from './dialog-list.module.css';

//component 
import Dialog from './dialog/dialog';



const DialogList = (props) => {
  let dialog_item = props.dialogList.map((e)=><Dialog name={e.sender}/>)
  return (
    <div className={s.dialog_list}>
      {dialog_item}
    </div>
  )
}

export default DialogList;
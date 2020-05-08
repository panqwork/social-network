import React from 'react';


import s from './dialog.module.css'
//component
import Avatar from '../../../../avatar/avatar';

const Dialog = (props) => {
  return (
    <div className={s.dialog_item}>
      <Avatar type='dialog' />
      <div>
        <div className={s.author}>
          {props.name}
        </div>
        <div className={s.date}>
        </div>
      </div>
    </div>
  )
}

export default Dialog;
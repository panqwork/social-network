import React from 'react';

// styles import
import s from './dialog.module.css'

//components import
import Avatar from '../../../../avatar/avatar.jsx';

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
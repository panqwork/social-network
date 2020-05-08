import React from 'react';
import s from './send_msg.module.css';

//component 
import Button from '../../../../generic/button/button'

import {changeMsgInputTextActionCreator, sendMsgActionCreator} from '../../../../../../redux/store'

const SendMsg = (props) => {
  const textRef = React.createRef();
  const changeInputText = () => {
    props.dispatch(changeMsgInputTextActionCreator(textRef.current.value))
  }
  const sendMessage = () => {
    props.dispatch(sendMsgActionCreator(textRef.current.value))
  }

  return(
    <div className={s.send}>
      <textarea onChange={changeInputText} ref={textRef} value={props.userMessages.currentInputText} placeholder='Напишите сообщение...' className={s.message_textarea}></textarea>
      <Button clickEvent={sendMessage}>Отправить</Button>
    </div>
  )
}

export default SendMsg;
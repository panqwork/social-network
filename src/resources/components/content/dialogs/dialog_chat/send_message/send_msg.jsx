import React from 'react';
import s from './send_msg.module.css';

//component 
import Button from '../../../../generic/button/button'


const SendMsg = (props) => {
  const textRef = React.createRef();
  const changeInputText = () => {
    props.changeTextarea(textRef.current.value)
  }
  const sendMessage = () => {
    props.sendMsg()
  }

  return(
    <div className={s.send}>
      <textarea onChange={changeInputText} ref={textRef} value={props.currentInputText} placeholder='Напишите сообщение...' className={s.message_textarea}></textarea>
      <Button clickEvent={sendMessage}>Отправить</Button>
    </div>
  )
}

export default SendMsg;
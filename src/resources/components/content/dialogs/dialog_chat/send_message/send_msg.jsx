import React from 'react';
import s from './send_msg.module.css';

//component 
import Button from '../../../../generic/button/button'


const SendMsg = (props) => {
  const textRef = React.createRef();
  
  const onChangeText = (e) => {
    props.changeInputText(e.target.value)
  }
  const sendMessage = () => {
    props.sendMessage()
  }

  return(
    <div className={s.send}>
      <textarea onChange={onChangeText} ref={textRef} value={props.currentTextInput} placeholder='Напишите сообщение...' className={s.message_textarea}></textarea>
      <Button clickEvent={sendMessage}>Отправить</Button>
    </div>
  )
}

export default SendMsg;
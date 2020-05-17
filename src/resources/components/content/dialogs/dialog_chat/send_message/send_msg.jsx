import React from 'react';

// styles import
import s from './send_msg.module.css';

//components import 
import Button from '../../../../generic/button/button.jsx';


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
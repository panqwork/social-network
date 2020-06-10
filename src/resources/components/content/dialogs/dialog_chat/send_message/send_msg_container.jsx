import React from 'react';

import { connect } from 'react-redux';
import {
  sendMsg
} from '../../../../../../redux/reducer/messageReducer.js';

//components import 
import Button from '../../../../generic/button/button.jsx';
import { Field, reduxForm } from 'redux-form';

import s from './send_msg.module.css'


const SendMsgArea = (props) => {
  return(
    <form onSubmit={props.handleSubmit} className={s.send}>
      <Field name={'message_text'} component={'textarea'} placeholder='Напишите сообщение...' className={s.message_textarea}></Field>
      <Button>Отправить</Button>
    </form>
  )
}

const SendMsgComponent = reduxForm({
  form: 'msg_form'
})(SendMsgArea)

const SendMsg = (props) => {
  const onSubmitForm = (dataForm) => {
    props.sendMsg(dataForm.message_text)
  }
  return(<SendMsgComponent onSubmit={onSubmitForm}/>)
}

let mapStateToProps = ()=> ({})
let mapDispatchToProps = (dispatch)=>{
  return({
    sendMsg: (msgText)=>{
      dispatch(sendMsg(msgText))
    }
  })
}

let SendMsgContainer = connect(mapStateToProps, mapDispatchToProps)(SendMsg)

export default SendMsgContainer;
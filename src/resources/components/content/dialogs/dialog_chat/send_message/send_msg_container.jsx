// components import
import SendMsg from './send_msg.jsx';

import { connect } from 'react-redux';
import {
  changeMsgInputTextActionCreator,
  sendMsgActionCreator
} from '../../../../../../redux/reducer/messageReducer.js';

let mapStateToProps = (state)=> {
  return({
    currentInputText: state.userMessages.currentInputText
  })
}

let mapDispatchToProps = (dispatch)=>{
  return({
    changeTextarea: (text)=>{
      dispatch(changeMsgInputTextActionCreator(text))
    },
    sendMsg: ()=>{
      dispatch(sendMsgActionCreator())
    }
  })
}

let SendMsgContainer = connect(mapStateToProps, mapDispatchToProps)(SendMsg)

export default SendMsgContainer;
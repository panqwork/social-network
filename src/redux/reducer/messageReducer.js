const INPUT_TEXT_MSG = 'INPUT-TEXT-MSG';
const SEND_MSG_CHAT = 'SEND-MSG-CHAT';
function Message(text, date, name="Anonymous") {
  this.text = text;
  this.date = date;
  this.sender = name;
}

let initialState = {
  activeDialog: 1,
  dialogs: [{id: 1,sender: 'Petya'},],
  messages:[{id:1,sender: 'Васька', text: '*косится на него* пс, а как стать всеми? я тож хочу шикарно'},],
  currentInputText: '',
}

const messageReducer = (state=initialState, action) => {
  switch(action.type) {
    case SEND_MSG_CHAT:
      let textMsg = state.currentInputText
      return {
        ...state,
        messages: [...state.messages, new Message(textMsg)],
        currentInputText: ''
      }
    case INPUT_TEXT_MSG:
      return {
        ...state,
        currentInputText: action.text
      }
    default:
      return state
  }
}


export const changeMsgInputTextActionCreator = (text)=>({type: INPUT_TEXT_MSG, text: text})
export const sendMsgActionCreator = ()=>({type: SEND_MSG_CHAT})

export default messageReducer;
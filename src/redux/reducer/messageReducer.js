const INPUT_TEXT_MSG = 'INPUT-TEXT-MSG';
const SEND_MSG_CHAT = 'SEND-MSG-CHAT';
function Message(text, name="Anonymous", id) {
  this.id = id;
  this.text = text;
  this.sender = name;
}

let initialState = {
  activeDialog: 1,
  dialogs: [{id: 1,sender: 'Petya'},{id: 1,sender: 'Petya'}],
  messages:[],
  currentInputText: '',
  id: 0
}

const messageReducer = (state=initialState, action) => {
  switch(action.type) {
    case SEND_MSG_CHAT:
      return {
        ...state,
        messages: [...state.messages, new Message(state.currentInputText)],
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
const SEND_MSG_CHAT = 'SEND-MSG-CHAT';
function Message(text, name="Anonymous", id) {
  this.id = id;
  this.text = text;
  this.sender = name;
}

let initialState = {
  activeDialog: 1,
  dialogs: [{id: 1,sender: 'Petya'},{id: 2,sender: 'Petya'}],
  messages:[],
  id: 0
}

const messageReducer = (state=initialState, action) => {
  switch(action.type) {
    case SEND_MSG_CHAT:
      return {
        ...state,
        messages: [...state.messages, new Message(action.message)],
        currentInputText: ''
      }
    default:
      return state
  }
}

export const sendMsg = (message) =>({type: SEND_MSG_CHAT, message:message})

export default messageReducer;
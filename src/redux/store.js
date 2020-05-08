const ADD_POST = 'ADD-POST';
const INPUT_TEXT_POST = 'INPUT-TEXT-POST';
const INPUT_TEXT_MSG = 'INPUT-TEXT-MSG';
const SEND_MSG_CHAT = 'SEND-MSG-CHAT'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
function Post(text,date,name="Anonymous") {
  this.text = text;
  this.name = name;
  this.date = date;
}
function Message(text, date, name="Anonymous") {
  this.text = text;
  this.date = date;
  this.sender = name;
}
function getCurrentDate() {
  let date = new Date();
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let hour = date.getHours()
  let minute = date.getMinutes();
  if(day < 10) {
    day = '0' + day
  }
  if(hour < 10) {
    hour = '0' + hour;
  }
  if(minute < 10) {
    minute = '0' + minute;
  }
  return `${day} ${month} ${hour}:${minute}`
}

const store = {
  _state: {
    userProfile: {
      userPosts: [],
      currentInputText: '',
    },
    userMessages: {
      activeDialog: 1,
      dialogs: [
        {
          id: 1,
          sender: 'Petya',
        },
        {
          id: 2,
          sender: 'Васька',
        },
        {
          id: 3,
          sender: 'Лероон',
        },
        {
          id: 4,
          sender: 'Пельмень',
        },
        {
          id: 10,
          sender: 'Кепка',
        },
      ],
      messages: [
        {id:1,sender: 'Васька', text: '*косится на него* пс, а как стать всеми? я тож хочу шикарно'},
        {id:2,sender: 'Пельмень', text: '*косится на него* пс, а как стать всеми? я тож хочу шикарно'},
        {id:3,sender: 'Petya', text: '*косится на него* пс, а как стать всеми? я тож хочу шикарно'},
        {id:4,sender: 'Димка', text: '*косится на него* пс, а как стать всеми? я тож хочу шикарно'},
        {id:5,sender: 'Кепка', text: '*косится на него* пс, а как стать всеми? я тож хочу шикарно'},
      ],
      currentInputText: '',
    }
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState(){
    return this._state;
  },

  dispath(action) { // object{type}
    switch(action.type) {
      case ADD_POST:
        let textPost = this._state.userProfile.currentInputText
        this._state.userProfile.userPosts.unshift(new Post(textPost, getCurrentDate()));
        this._callSubscriber();
        this._state.userProfile.currentInputText = ''
        break;
      case INPUT_TEXT_POST:
        this._state.userProfile.currentInputText = action.text;
        this._callSubscriber()
        break;
      case SEND_MSG_CHAT:
        let textMsg = this._state.userMessages.currentInputText
        this._state.userMessages.messages.push(new Message(textMsg))
        this._callSubscriber()
        this._state.userMessages.currentInputText = ''
        break;
      case INPUT_TEXT_MSG:
        this._state.userMessages.currentInputText = action.text;
        this._callSubscriber();
        break;
      default:
        alert('please, reload a page');
        break;
    }
  }
  
}


export const addPostAtcionCreator = ()=>({type:ADD_POST})
export const changePostInputTextActionCreator = (text)=>({type: INPUT_TEXT_POST, text:text})
export const changeMsgInputTextActionCreator = (text)=>({type: INPUT_TEXT_MSG, text: text})
export const sendMsgActionCreator = (text)=>({type: SEND_MSG_CHAT})

export default store;
const ADD_POST = 'ADD-POST';
const INPUT_TEXT = 'INPUT-TEXT';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
function Post(text,date,name="Anonymous") {
  this.text = text;
  this.name = name;
  this.date = date;
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
  },

  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState(){
    return this._state;
  },
  inputTextarea(text) {
    
  },

  dispath(action) { // object{type}
    switch(action.type) {
      case ADD_POST:
        let text = this._state.userProfile.currentInputText
        this._state.userProfile.userPosts.unshift(new Post(text, getCurrentDate()));
        this._callSubscriber();
        this._state.userProfile.currentInputText = ''
        break;
      case INPUT_TEXT:
        this._state.userProfile.currentInputText = action.text;
        this._callSubscriber()
        break
    }
  }
  
}


export const addPostAtcionCreator = ()=>{return{type:ADD_POST}}
export const changeInputTextActionCreator = (text)=>{return{type: INPUT_TEXT, text:text}}

export default store;
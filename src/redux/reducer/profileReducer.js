const ADD_POST = 'ADD-POST';
const INPUT_TEXT_POST = 'INPUT-TEXT-POST';
function Post(text,date,name="Anonymous", id) {
  this.text = text;
  this.name = name;
  this.date = date;
  this.id = id;
}
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
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

let initialStore = {userPosts: [],currentInputText: ''};

const profileReducer = (state=initialStore, action) => {
  switch(action.type) {
    case ADD_POST:
      let textPost = state.currentInputText
      return {
        ...state,
        userPosts: [...state.userPosts, new Post(textPost, getCurrentDate(), 'Создатель' , 10)],
        currentInputText: '',
      }
    case INPUT_TEXT_POST:
      return {
        ...state,
        currentInputText: action.text
      }
    default:
      return state;
  }  
}

export const addPostAtcionCreator = ()=>({type:ADD_POST})
export const changePostInputTextActionCreator = (text)=>({type: INPUT_TEXT_POST, text:text})
export default profileReducer;


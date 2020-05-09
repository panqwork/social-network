import profileReducer from './reducer/profileReducer';
import messageReducer from './reducer/messageReducer';

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

  subscribe(callBack) {
    this._callSubscriber = callBack;
  },

  getState(){
    return this._state;
  },

  dispatch(action) { // object{type}
    this._state.userProfile = profileReducer(this._state.userProfile, action);
    this._state.userMessages = messageReducer(this._state.userMessages, action);
    this._callSubscriber()
  }
  
}




export default store;
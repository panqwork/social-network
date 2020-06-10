import {profileAPI} from '../../API/api.js'

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';

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

let initialStore = {
  userPosts: [],
  profile: null,
  profileStatus: ''
};

const profileReducer = (state=initialStore, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        userPosts: [new Post(action.postText, getCurrentDate(), 'Создатель' , 10),...state.userPosts],
        currentInputText: '',
      }
    case SET_PROFILE:
      return{...state, profile: {...action.profile}}
    case SET_PROFILE_STATUS:
      return {...state, profileStatus: action.status}
    case UPDATE_PROFILE_STATUS:
      return {...state, profileStatus: action.status}
    default:
      return state;
  }  
}

export const addPost = (postText)=>({type:ADD_POST, postText: postText});
export const setProfile = (profile)=>({type: SET_PROFILE, profile: profile});
export const setProfileStatus = (status)=>({type:SET_PROFILE_STATUS, status: status})
export const updateProfileStatusCreator = (status)=>({type:UPDATE_PROFILE_STATUS, status: status})

export const requireProfile = (userId) => {
  return (dispatch) => {
    profileAPI.requireProfile(userId).then(
      response => {
        dispatch(setProfile(response.data));
      }
    )
  }
}

export const requireProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then(
      response => {
        dispatch(setProfileStatus(response))
      }
    )
  }
}
export const updateProfileStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status).then(
      response => {
        if(response.data.resultCode === 0){
          dispatch(updateProfileStatusCreator(status))
        }
      }
    )
  }
}

export default profileReducer;


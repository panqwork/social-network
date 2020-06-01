import {usersAPI} from '../../API/api.js';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const CHANGE_PAGE = 'CHANGE-PAGE';
const SET_USERS_COUNT = 'SET-USER-COUNT';
const SWITCH_FETCHING = 'SWITCH-FETCHING';
const FOLLOW_IN_PROGRESS = 'FOLLOW-IN-PROGRESS'


const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 70,
  totalUsersCount: 0,
  isFetching: false,
  followingItems: []
}

const usersReducer = (state=initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {...state, users: state.users.map(u => {
        if(u.id === +action.userId) {
          return {...u, followed: true}
        }
        return u;
      })}
    case UNFOLLOW:
      return {...state, users: state.users.map(u => {
        if(u.id === +action.userId) {
          return {...u, followed: false}
        }
        return u;
      })}
    case SET_USERS:
      return {...state, users: [...action.users]}
    case CHANGE_PAGE:
      return {...state, currentPage: action.pageNumber}
    case SET_USERS_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}
    case SWITCH_FETCHING:
      return {...state, isFetching: action.isFetching}
    case FOLLOW_IN_PROGRESS:
      return {
        ...state, 
        followingItems: action.isFollowing 
                        ? [...state.followingItems, action.userId]
                        : state.followingItems.filter(item => item != action.userId)
      }
    default:
      return state
  }
}

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersToState = (users) => ({type: SET_USERS, users: users});
export const changePageReducer = (pageNumber) => ({type: CHANGE_PAGE, pageNumber: pageNumber});
export const setUserCount = (count) => ({type: SET_USERS_COUNT, totalUsersCount: count});
export const isFetching = (isFetching) => ({type: SWITCH_FETCHING, isFetching: isFetching});
export const followInProgress = (userId, isFollowing) => ({type: FOLLOW_IN_PROGRESS, userId: userId, isFollowing: isFollowing});

export const setUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(isFetching(true))
    usersAPI.setUsers(currentPage, pageSize).then(response => {
      dispatch(isFetching(false));
      dispatch(setUsersToState(response.items));
      dispatch(setUserCount(response.totalCount));
    })
  }
}

export const followSwitch = (type, userId) => {
  return (dispatch) => {
    switch(type) {
      case 'delete':
        dispatch(followInProgress(userId, true))
        usersAPI.followSwitch(type, userId).then(response => {
          if(response === 0){
            dispatch(unfollow(userId));
          }
          dispatch(followInProgress(userId, false));
        })
        break
      case 'post':
        dispatch(followInProgress(userId, true))
        usersAPI.followSwitch(type, userId).then(response => {
          if(response === 0){
            dispatch(follow(userId));
          }
          dispatch(followInProgress(userId, false));
        })
        break
    }
  }
}

export default usersReducer
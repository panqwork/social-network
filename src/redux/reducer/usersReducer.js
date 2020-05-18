const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const CHANGE_PAGE = 'CHANGE-PAGE';
const SET_USERS_COUNT = 'SET-USER-COUNT';


const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 50,
  totalUsersCount: 0
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
    case 'UNFOLLOW':
      return {...state, users: state.users.map(u => {
        if(u.id === +action.userId) {
          return {...u, followed: false}
        }
        return u;
      })}
    case SET_USERS:
      return {...state, users: [...action.users]}
    case CHANGE_PAGE:
      return {...state, currentPage: +action.pageNumber}
    case SET_USERS_COUNT:
      return {...state, totalUsersCount: +action.totalUsersCount}
    default:
      return state
  }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId: userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const changePage = (pageNumber) => ({type: CHANGE_PAGE, pageNumber: pageNumber});
export const setUserCount = (count) => ({type: SET_USERS_COUNT, totalUsersCount: count});

export default usersReducer
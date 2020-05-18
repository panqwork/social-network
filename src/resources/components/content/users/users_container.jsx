import Users from './users.jsx';
import { connect } from 'react-redux';

// modules import
import {followAC, unfollowAC,setUsers,changePage,setUserCount} from '../../../../redux/reducer/usersReducer.js';

const mapStateToProps = (state) => {
  return({
    users: state.userList.users,
    currentPage: state.userList.currentPage,
    pageSize: state.userList.pageSize,
    totalUsersCount: state.userList.totalUsersCount
  })
}

const mapDispatchToProps = (dispatch) => {
  return({
    follow: (userId)=> {
      dispatch(followAC(userId));
    },
    unfollow: (userId)=> {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsers(users))
    },
    changePage: (pageNumber) => {
      dispatch(changePage(pageNumber))
    },
    setUserCount: (count) => {
      dispatch(setUserCount(count))
    }
  })
}

const UserListContainer = connect(mapStateToProps,mapDispatchToProps)(Users)

export default UserListContainer;
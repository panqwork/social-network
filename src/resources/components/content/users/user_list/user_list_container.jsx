import UserList from './user_list.jsx';
import { connect } from 'react-redux';

// modules import
import {followAC, unfollowAC,setUsers} from '../../../../../redux/reducer/usersReducer.js';

const mapStateToProps = (state) => {
  return({
    users: state.userList.users
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
    }
  })
}

const UserListContainer = connect(mapStateToProps,mapDispatchToProps)(UserList)

export default UserListContainer;
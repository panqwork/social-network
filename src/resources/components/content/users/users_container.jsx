import React from 'react';
import { connect } from 'react-redux';

// modules import
import {followSwitch,setUsers,setUsersToState,changePageReducer,setUserCount,isFetching} from '../../../../redux/reducer/usersReducer.js';

// components import
import UsersComponent from './users.jsx';
import Preloader from '../../generic/preloader/preloader.jsx';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setUsers(this.props.currentPage, this.props.pageSize)
  }
  changePage=(pageNumber)=>{
    this.props.changePageReducer(pageNumber);
    this.props.setUsers(pageNumber, this.props.pageSize)
  }

  render(){
    return <>
      {this.props.isFetchingBool ? <Preloader/>:null}
      <UsersComponent
                      users={this.props.users} 
                      currentPage={this.props.currentPage} 
                      totalUsersCount={this.props.totalUsersCount} 
                      pageSize={this.props.pageSize} 
                      changePage={this.changePage}
                      followingItems={this.props.followingItems}
                      followSwitch={this.props.followSwitch}
                      />
    </>
  }
}

const mapStateToProps = (state) => {
  return({
    users: state.userList.users,
    currentPage: state.userList.currentPage,
    pageSize: state.userList.pageSize,
    totalUsersCount: state.userList.totalUsersCount,
    isFetchingBool: state.userList.isFetching,
    followingItems: state.userList.followingItems
  })
}

export const UsersContainer = connect(mapStateToProps,{
  setUsersToState,
  changePageReducer,
  setUserCount,
  isFetching,
  setUsers,
  followSwitch
}) (Users);


import React from 'react';

// styles import
import s from './style.module.css';

// components import
import User from './user/user.jsx';
import * as axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      console.log(response.data);
      this.props.setUsers(response.data.items);
      this.props.setUserCount(response.data.totalCount)
    })
  }
  changePage=(pageNumber)=>{
    this.props.changePage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setUserCount(response.data.totalCount);
    })
  }
  render(){
    let paginationItemCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    console.log(paginationItemCount);
    let paginationItems = [];
    for(let i = 1; i<=paginationItemCount; i++){
      paginationItems.push(i)
    }
    return(
      <div className={s.users}>
        <div className={s.pagination}>
          {paginationItems.map(i=>{
            return <span onClick={()=>{this.changePage(i)}} className={(i === this.props.currentPage)? s.active_pagination : ''}>{i}</span>
          })}
        </div>
        <div className={s.user_list}>
          {this.props.users.map(e=><User key={e.id} photo={e.photos.small} id={e.id} followed={e.followed} follow={this.props.follow} unfollow={this.props.unfollow} key={e.id} username={e.name} status={e.status}/>)}
        </div>
      </div>
    )
  }
}

export default Users;
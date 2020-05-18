import React from 'react';

// styles import
import s from './style.module.css';

// components import
import User from './user/user.jsx';
import * as axios from 'axios';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=100&count=10').then(response => {
      this.props.setUsers(response.data.items);
    })
  }
  render(){
    return(
      <div className={s.user_list}>
        {this.props.users.map(e=><User photo={e.photos.small} id={e.id} followed={e.followed} follow={this.props.follow} unfollow={this.props.unfollow} key={e.id} username={e.name} status={e.status}/>)}
      </div>
    )
  }
}

export default UserList;
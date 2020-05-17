import React from 'react';

// styles import
import s from './style.module.css';

// components import
import User from './user/user.jsx';
import * as axios from 'axios';

const UserList = (props) => {
  if(props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      console.log(response.data.items);
      props.setUsers(response.data.items);
    })
  }
  const users = props.users.map(e=><User photo={e.photos.small} id={e.id} followed={e.followed} follow={props.follow} unfollow={props.unfollow} key={e.id} username={e.name} status={e.status}/>)
  return(
    <div className={s.user_list}>
      {users}
    </div>
  )
}

export default UserList;
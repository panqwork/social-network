import React from 'react';

// styles import
import s from './style.module.css';

// components import
import User from './user/user.jsx';

const UserList = (props) => {
  if(props.users.length === 0) {
    props.setUsers([
      {id: 1,name: 'Dmitriy',about: 'I\'m React developer!', followStatus:false},
      {id: 2,name: 'Anatoliy',about: 'I\'m Java developer!', followStatus:false},
      {id: 3,name: 'Katya',about: 'I\'m SEO!', followStatus:false},
    ])
  }
  const users = props.users.map(e=><User id={e.id} followStatus={e.followStatus} follow={props.follow} unfollow={props.unfollow} key={e.id} username={e.name} about={e.about}/>)
  return(
    <div className={s.user_list}>
      {users}
    </div>
  )
}

export default UserList;
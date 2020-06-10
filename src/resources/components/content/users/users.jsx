import React from 'react';

// styles import
import s from './style.module.css';

// components import
import User from './user/user.jsx';
import { Redirect } from 'react-router-dom';

const Users = (props) => {
  let paginationItemCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let paginationItems = [];
  for(let i = 1; i<=paginationItemCount; i++){
    paginationItems.push(i)
  }
  return(
    <div className={s.users}>
      <div className={s.pagination}>
        {paginationItems.map(i=>{
          return <span onClick={()=>{props.changePage(i)}} className={(i === props.currentPage)? s.active_pagination : ''}>{i}</span>
        })}
      </div>
      <div className={s.user_list}>
        {props.users.map(e=><User key={e.id} 
                                  photo={e.photos.small} 
                                  id={e.id} 
                                  followed={e.followed}
                                  key={e.id} 
                                  username={e.name} 
                                  status={e.status}
                                  followingItems={props.followingItems}
                                  followSwitch={props.followSwitch}
                                  />)}
                                  
      </div>
    </div>
  )
}

export default Users;
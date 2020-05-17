import React from 'react';

// styles import
import style from './content-style.module.css'

// components import 
import ProfileContainer from './profile/profile.jsx';
import Dialogs from './dialogs/dialogs.jsx';
import UsersContainer from './users/users.jsx'

// modules import
import {Switch, Route} from 'react-router-dom';

const ContentContainer = (props) => {
  return(
    <div className={style.content}>
      <Switch>
        <Route path="/profile" render={() => <ProfileContainer/>}/>
        <Route path="/messages" render={() => <Dialogs/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
      </Switch>
    </div>
  )
}

export default ContentContainer
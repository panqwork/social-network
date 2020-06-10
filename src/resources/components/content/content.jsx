import React from 'react';

// styles import
import style from './content-style.module.css'

// components import 
import ProfileContainer from './profile/profile_container.jsx';
import Dialogs from './dialogs/dialogs.jsx';
import {UsersContainer} from './users/users_container.jsx';
import {LoginContainer} from './login/login_container.jsx';

// modules import
import {Switch, Route} from 'react-router-dom';

const ContentContainer = (props) => {
  return(
    <div className={style.content}>
      <Switch>
        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
        <Route path="/messages" render={() => <Dialogs/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
        <Route path="/login" render={() => <LoginContainer/>}/>
      </Switch>
    </div>
  )
}

export default ContentContainer
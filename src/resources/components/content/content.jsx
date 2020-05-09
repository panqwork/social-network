import React from 'react';
import {Switch, Route} from 'react-router-dom';
import style from './content-style.module.css'

// components
import ProfileContainer from './profile/profile';
import Dialogs from './dialogs/dialogs';

const ContentContainer = (props) => {
  return(
    <div className={style.content}>
      <Switch>
        <Route path="/profile" render={() => <ProfileContainer store={props.store}/>}/>
        <Route path="/messages" render={() => <Dialogs store={props.store}/>}/>
      </Switch>
    </div>
  )
}

export default ContentContainer
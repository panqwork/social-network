import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = (Component) => {

  class authRedirect extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      if(!this.props.isAuth) {
        return <Redirect to='/login'/>
      }
      return <Component {...this.props}/>
    }
  }

  let mapAuthToProps = (state) => ({
    isAuth: state.auth.authData.isAuth
  })

  let connectedAuthRedirect = connect(mapAuthToProps)(authRedirect)
  return connectedAuthRedirect
}
import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile.jsx'

import {requireProfile,requireProfileStatus,updateProfileStatus} from '../../../../redux/reducer/profileReducer.js';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.match.params.userId?this.props.match.params.userId:this.props.ourUserId
    }
  }
  componentDidMount() {
    if(this.state.userId !== null){
      this.setUser(this.state.userId)
    } else {
      this.props.history.push('/login')
    }
  }
  componentDidUpdate(prevProps) {
    debugger
    if(prevProps.ourUserId !== this.props.ourUserId && !(this.props.match.params.userId) && this.props.ourUserId !== null){
      this.setState({
        userId: this.props.ourUserId
      })
      this.setUser(this.props.ourUserId)
    } 
  }
  setUser(userId) {
    this.props.requireProfile(userId);
    this.props.requireProfileStatus(userId);
  }
  render() {
    return(
      <Profile updateProfileStatus={this.props.updateProfileStatus} profile={this.props.profile} profileStatus={this.props.profileStatus}/>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.userProfile.profile,
  profileStatus: state.userProfile.profileStatus,
  ourUserId: state.auth.authData.id,
  isAuth: state.auth.authData.isAuth
})

export default compose(
  connect(mapStateToProps,{
    requireProfile,
    requireProfileStatus,
    updateProfileStatus,
  }),
  withRouter
)(ProfileContainer)
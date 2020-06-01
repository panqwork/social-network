import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile.jsx'

import {setProfile,requireProfileThink} from '../../../../redux/reducer/profileReducer.js';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let userId = this.props.match.params.userId?this.props.match.params.userId:2;
    this.props.requireProfileThink(userId)
  }
  render() {
    return(
      <Profile profile={this.props.profile}/>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.userProfile.profile
})

export default connect(mapStateToProps,{
  setProfile,
  requireProfileThink
})(withRouter(ProfileContainer));
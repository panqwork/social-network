import React from 'react';
import Header from './header.jsx';
import { connect } from 'react-redux';

import {authRequestData} from '../../../redux/reducer/authReducer.js';

import {logout} from '../../../redux/reducer/authReducer.js';

class authRequest extends React.Component {
  render() {
    return <Header logout={this.props.logout} authData={this.props.authData}/>
  }
}

let mapStateToProps = (state) => ({
  authData: state.auth.authData
})

export default connect(mapStateToProps, {
  authRequestData,
  logout
})(authRequest)
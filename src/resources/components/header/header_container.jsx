import React from 'react';
import Header from './header.jsx';
import { connect } from 'react-redux';

import {authRequestData} from '../../../redux/reducer/authReducer.js';

import {isAuthThunk} from '../../../redux/reducer/authReducer.js';

class authRequest extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.isAuthThunk()
  }
  render() {
    return <Header authData={this.props.authData}/>
  }
}

let mapStateToProps = (state) => ({
  authData: state.auth.authData
})

export default connect(mapStateToProps, {
  authRequestData,
  isAuthThunk
})(authRequest)
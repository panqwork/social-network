import React from 'react';

// components import
import Avatar from '../../../../../avatar/avatar.jsx';

// styles import
import s from './message.module.css';

class Message extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(<div className={s.message}>
      <Avatar type='message' />
      <div>
        <div className={s.author}>
          {this.props.sender}
        </div>
        <div className={s.text}>
          {this.props.text}
        </div>
      </div>
    </div>)
  }
}

export default Message;
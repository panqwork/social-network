// components import
import MessagesList from './messages_list.jsx';

// modules import
import { connect } from "react-redux";

const mapStateToProps = (state)=> {
  return({
    messages: state.userMessages.messages
  })
}

const MessageListContainer = connect(mapStateToProps)(MessagesList);

export default MessageListContainer;
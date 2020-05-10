import { connect } from "react-redux";
import MessagesList from './messages_list';

const mapStateToProps = (state)=> {
  return({
    messages: state.userMessages.messages
  })
}

const MessageListContainer = connect(mapStateToProps)(MessagesList);

export default MessageListContainer;
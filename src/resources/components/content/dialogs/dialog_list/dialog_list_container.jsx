// modules import
import { connect } from "react-redux"

// components import
import DialogList from './dialog_list.jsx';

const mapStateToProps = (state) => {
  return(
    {
      dialogList: state.userMessages.dialogs
    }
  )
}

const mapDispatchToProps = (dispatch) => {
  return(
    {

    }
  )
}

const DialogListContainer = connect(mapStateToProps,mapDispatchToProps)(DialogList);

export default DialogListContainer;
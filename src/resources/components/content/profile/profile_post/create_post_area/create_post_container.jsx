import { connect } from "react-redux";
import CreatePost from './create_post'
import {addPostAtcionCreator,changePostInputTextActionCreator} from '../../../../../../redux/reducer/profileReducer'

const mapStateToProps = (state) => {
  return({
    currentInputText: state.userProfile.currentInputText
  })
}
const mapDispatchToProps = (dispatch) => {
  return({
    addPost: ()=>{
      dispatch(addPostAtcionCreator())
    },
    updateTextarea: (text)=>{
      dispatch(changePostInputTextActionCreator(text))
    }
  })
}

const CreatePostContainer = connect(mapStateToProps,mapDispatchToProps)(CreatePost)

export default CreatePostContainer;
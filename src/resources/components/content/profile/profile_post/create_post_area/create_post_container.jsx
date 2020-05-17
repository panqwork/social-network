// components import
import CreatePost from './create_post.jsx'
import {
  addPostAtcionCreator,
  changePostInputTextActionCreator
} from '../../../../../../redux/reducer/profileReducer.js';

// modules import
import {connect} from 'react-redux';


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
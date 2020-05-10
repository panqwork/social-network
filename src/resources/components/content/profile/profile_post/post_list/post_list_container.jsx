import { connect } from "react-redux";
import PostList from './post_list'

const mapStateToProps = (state) => {
  return({
    userPosts: state.userProfile.userPosts
  })
}

const PostListContainer = connect(mapStateToProps)(PostList)

export default PostListContainer;
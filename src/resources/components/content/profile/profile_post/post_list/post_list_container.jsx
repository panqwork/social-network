// components import
import PostList from './post_list.jsx'

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return({
    userPosts: state.userProfile.userPosts
  })
}

const PostListContainer = connect(mapStateToProps)(PostList)

export default PostListContainer;
import React from 'react';
import Post from './post/post';


const List = (props) => {
  console.log(props);
  let post_items = props.userPosts.map((e) => {return(<Post key={e.id} text={e.text} author={e.name} date={e.date}/>)})
  return(
    <div className="post_list">
      {post_items}
    </div>
  )
}

export default List
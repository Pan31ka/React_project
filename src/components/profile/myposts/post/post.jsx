import React from 'react';
import s1 from  './post.module.css'
const Post = (props) => {
    return <div className={s1.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRolB5qnrVtoZiGNsC7s-UFI30kpFIy1D6VHGopGhEHSA-3a8fxAI_YN-Jei-uHqYImGjM&usqp=CAU'/>
        { props.message } 
          <div>
          <span>Like</span>
          </div>
        </div>
        
}

export default Post;
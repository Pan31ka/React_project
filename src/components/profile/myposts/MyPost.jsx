import React from 'react';
import s1 from  './MyPost.module.css'
import Post from './post/post';
const MyPost = () => {
    return <div className={s1.item}>
      My posts
      <div>
        New post
      </div>
      <div >
       <Post message='hi, how are you'/>
       <Post message='it my first project'/>
       <Post/>
       <Post/>
       <Post/>
      </div>
    </div>
 
}

export default MyPost;
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
       <Post message='hi, how are you' like=' 15'/>
       <Post message='it my first project'like=' 351'/>
       <Post/>
       <Post/>
       <Post/>
      </div>
    </div>
 
}

export default MyPost;
import React from 'react';
import s1 from './MyPost.module.css'
import Post from './post/post';
const MyPost = (props) => {

	let MyPostEl = props.MyPostData.map(p => <Post message={p.text} like={p.like} />)
	return <div className={s1.item}>
		<h2>My posts</h2>
		<div >
			<h4>New post</h4>
		</div>
		<div>
			<textarea className={s1.border}> </textarea>
		</div>
		<div >
			<button >Post this shit</button>
		</div>
		<div >
			{MyPostEl}
		</div>
	</div>

}

export default MyPost;
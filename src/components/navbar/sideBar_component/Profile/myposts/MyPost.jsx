import React from 'react';
import s1 from './MyPost.module.css'
import Post from './post/post';
const MyPost = () => {
	let MyPostData = [
		{ id: 1, text: 'hi, how are you', like: '15' },
		{ id: 2, text: 'it my first project', like: '351' }
	]
	let MyPostEl = MyPostData.map(p => <Post message={p.text} like={p.like} />)
	return <div className={s1.item}>
		<h2>My posts</h2>
		<div >
			<h4>New post</h4>
		</div>
		<div>
			<textarea className={s1.border}> </textarea>
		</div>
		<div >
			<button >Post this</button>
		</div>
		<div >
			{MyPostEl}

		</div>
	</div>

}

export default MyPost;
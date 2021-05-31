import React from 'react';
import s1 from './MyPost.module.css'
import Post from './post/post';
import { actionCreator, updateNewTextActionCreator } from '../../../../../Redux/state.js';



const MyPost = (props) => {




	let MyPostEl = props.MyPostData.map(p => <Post message={p.text} like={p.like} />)
	let newPostElement = React.createRef();
	let addPost = () => {
		debugger;
		//	let add = actionCreator();
		props.dispatch(actionCreator());


	}

	let onPostChange = () => {
		debugger;
		let text = newPostElement.current.value;
		//let action = updateNewTextActionCreator(text);
		props.dispatch(updateNewTextActionCreator(text));

	}
	return <div className={s1.item}>
		<h2>My posts</h2>
		<div >
			<h4>New post</h4>
		</div>
		<div>
			<textarea className={s1.border} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
		</div>
		<div >
			<button onClick={addPost}>Post this shit</button>
		</div>
		<div >
			{MyPostEl}
		</div>
	</div>

}

export default MyPost;
import React from 'react';
import s1 from './MyPost.module.css'
import Post from './post/post';
import { addPostCreator, updateNewTextCreator } from '../../../../../Redux/PostReducer';
import MyPost from './MyPost';


const MyPostContainer = (props) => {

	let state =props.store.getState();
	
	let addPost = () => {
	
		props.store.dispatch(addPostCreator());


	}

	let onPostChange = (text) => {
		debugger;
		
		let action = updateNewTextCreator(text);
		props.store.dispatch(action);

	}
	return (<MyPost updateNewTextCreator= {onPostChange} addPost={addPost} MyPostData={state.PostsPage.MyPostData} newPostText={state.PostsPage.newPostText}/>)

}

export default MyPostContainer;
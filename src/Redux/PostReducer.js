const Add_Post = 'ADD-POST';
const Update_New_Post = 'UPDATE-NEW-POST-TEXT';

 const PostReducer = (state,action) =>{
	switch(action.type) {
		case Add_Post:
			let newPost = {
				id: 5,
				text: state.newPostText,
				like: 0,
			};
			state.MyPostData.push(newPost);
			state.newPostText = ' ';
			return state;
		case Update_New_Post:
			state.newPostText = action.newText;
			
			console.log(action.newText);
			return state;
		default:
			return state; 
		
	} 


}
export let addPostCreator = () => {
	return {
		type: Add_Post
	}
}

export let updateNewTextCreator = (text) => {
	return {
		type: Update_New_Post,
		newText: text
	}
}

export default PostReducer;
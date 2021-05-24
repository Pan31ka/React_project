let renderEniteTree = () => {
	console.log('state change');
}

let state = {

	PostsPage: {
		MyPostData: [
			{ id: 1, text: 'hi, how are you', like: '15' },
			{ id: 2, text: 'it my first project', like: '351' }
		],
		newPostText: 'Test213'
	},
	MessagesPage: {
		MessagesData: [
			{ id: 1, text: ' Are you useless?' },
			{ id: 2, text: ' Are you useless?' },
			{ id: 3, text: ' Are you useless?' },
			{ id: 4, text: ' Are you useless?' },
			{ id: 5, text: ' Are you useless?' },
			{ id: 6, text: ' Are you useless?' },
		],
		DialogsData: [
			{ id: 1, name: 'Nikita' },
			{ id: 2, name: 'Nikita' },
			{ id: 3, name: 'Nikita' },
			{ id: 4, name: 'Nikita' },
			{ id: 5, name: 'Nikita' },
			{ id: 6, name: 'Nikita' }
		],
	},


}
export let addPost = () => {

	let newPost = {
		id: 5,
		text: state.PostsPage.newPostText,
		like: 0,
	};
	state.PostsPage.MyPostData.push(newPost);
	state.PostsPage.newPostText = ' ';
	renderEniteTree(state);
}
export let updatePostText = (newText) => {
	state.PostsPage.newPostText = newText;
	renderEniteTree(state);
}
export let subscribe = (observer) => {
	renderEniteTree = observer//Наблюдатель 
}
export default state;
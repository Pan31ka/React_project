
let state = {

	PostsPage: {
		MyPostData: [
			{ id: 1, text: 'hi, how are you', like: '15' },
			{ id: 2, text: 'it my first project', like: '351' }
		],
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
export let addPost = (postMessage) => {

	let newPost = {
		id: 5,
		text: postMessage,
		like: 0,
	};
	state.PostsPage.MyPostData.push(newPost);
	debugger;
}
export default state;
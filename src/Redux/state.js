let store = {
	_state: {

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


	},
	CallSubscribe() {
		console.log('state change');
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._CallSubscribe = observer//Наблюдатель 
	},



	addPost() {

		let newPost = {
			id: 5,
			text: this._state.PostsPage.newPostText,
			like: 0,
		};
		this._state.PostsPage.MyPostData.push(newPost);
		this._state.PostsPage.newPostText = ' ';
		this._CallSubscribe(this._state);
	},
	updatePostText(newText) {
		this._state.PostsPage.newPostText = newText;
		this._CallSubscribe(this._state);
	},
	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				text: this._state.PostsPage.newPostText,
				like: 0,
			};
			this._state.PostsPage.MyPostData.push(newPost);
			this._state.PostsPage.newPostText = ' ';
			this._CallSubscribe(this._state);
		}
		else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.PostsPage.newPostText = action.newText;
			this._CallSubscribe(this._state);
		}
	}
}
export default store;
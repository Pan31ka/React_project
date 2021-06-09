const Add_Post = 'ADD-POST';
const Update_New_Post = 'UPDATE-NEW-POST-TEXT';
const Update_New_Message_Body = 'UPDATE_NEW_MESSAGE_BODY';
const Send_Message = 'SEND_MESSAGE';



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
			NewMassageBody: 'Test'
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
		if (action.type === Add_Post) {
			let newPost = {
				id: 5,
				text: this._state.PostsPage.newPostText,
				like: 0,
			};
			this._state.PostsPage.MyPostData.push(newPost);
			this._state.PostsPage.newPostText = ' ';
			this._CallSubscribe(this._state);
		}
		else if (action.type === Update_New_Post) {
			this._state.PostsPage.newPostText = action.newText;
			this._CallSubscribe(this._state);
			console.log(action.newText);
		}
		else if (action.type === Update_New_Message_Body){
			this._state.MessagesPage.NewMassageBody = action.message;
			this._CallSubscribe(this._state);
			console.log(action.message);
		}
		else if (action.type === Send_Message){
			let message = this._state.MessagesPage.NewMassageBody;
			this._state.MessagesPage.NewMassageBody = ' ';
			this._state.MessagesPage.MessagesData.push({ id: 7, text: message });
			this._CallSubscribe(this._state);
		}
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

export let updateMessageCreator  = (message) => {
	return {
		type: Update_New_Message_Body,
		message: message
	}
}

export let addMessageCreator = () => {
	return {
		type: Send_Message,
		
	}
}
export default store;
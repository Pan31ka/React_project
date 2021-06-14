const Update_New_Message_Body = 'UPDATE_NEW_MESSAGE_BODY';
const Send_Message = 'SEND_MESSAGE';


let initialState = {
	
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
		NewMassageBody: 'Test',
	


}

const MessageReducer = (state = initialState,action) =>{

	switch(action.type){
		case Update_New_Message_Body:
			state.NewMassageBody = action.message;
		
		console.log(action.message);
		return state;
		case Send_Message:
			let message = state.NewMassageBody;
		state.NewMassageBody = ' ';
		state.MessagesData.push({ id: 7, text: message });
		return state;
		default:
			return state;

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
export default MessageReducer;
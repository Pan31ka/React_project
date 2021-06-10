const Update_New_Message_Body = 'UPDATE_NEW_MESSAGE_BODY';
const Send_Message = 'SEND_MESSAGE';

const MessageReducer = (state,action) =>{

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
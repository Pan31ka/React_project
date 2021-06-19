import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './Message/MessageItem';
import { updateMessageCreator, addMessageCreator} from '../../../../Redux/MessageReducer';
import Dialogs from './dialogs';



const DialogsContainer = (props) => {
	debugger
	let state = props.store.getState().MessagesPage


	let onSendMessageClick = () =>{
		props.store.dispatch(addMessageCreator());
	}
	let onNewMessageChange = (body) =>{
		props.store.dispatch(updateMessageCreator(body));
	}


	
	return (
		<Dialogs updateMessageCreator={onNewMessageChange}  addMessageCreator={onSendMessageClick} MessagesPage={state}/>
	)
}
export default DialogsContainer;
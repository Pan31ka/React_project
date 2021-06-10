import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './Message/MessageItem';
import { updateMessageCreator, addMessageCreator} from '../../../../Redux/MessageReducer';



const Dialogs = (props) => {
	debugger
	let onSendMessageClick = () =>{
		props.dispatch(addMessageCreator());
	}
	let onNewMessageChange = (event) =>{
		let body = event.target.value;	
		props.dispatch(updateMessageCreator(body));

	}


	let DialogsElement = props.state.DialogsData.map(d => <DialogItem name={d.name} id={d.id}  />)
	let MessagesElement = props.state.MessagesData.map(m => <MessageItem text={m.text} />)
	let NewMassageBody = props.state.NewMassageBody;
	return (
		<div className={s.item}>
			<div className={s.dialogs}>
				{DialogsElement}

			</div>
			<div className={s.messages}>
				<div>{MessagesElement}</div>
				<div>
				<div><textarea value={NewMassageBody} onChange={onNewMessageChange}></textarea></div>
				<div><button onClick={onSendMessageClick}>Send</button></div>
				</div>
			</div>
		</div>
	)
}
export default Dialogs;
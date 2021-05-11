import React from 'react';

import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import MessageItem from './Message/MessageItem';
const Dialogs = (props) => {

	let DialogsElement = props.DialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
	let MessagesElement = props.MessagesData.map(m => <MessageItem text={m.text} />)
	return (
		<div className={s.item}>
			<div className={s.dialogs}>
				{DialogsElement}

			</div>
			<div className={s.messages}>
				{MessagesElement}
			</div>
		</div>
	)
}
export default Dialogs;
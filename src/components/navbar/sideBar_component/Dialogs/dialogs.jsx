import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';
import s from './Dialogs.module.css';
const DialogItem = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}> {props.name}</NavLink>
		</div>
	)
}
const MessageItem = (props) => {
	return (
		<div className={s.message}>
			{props.text}
		</div>
	)
}
const Dialogs = (props) => {
	let DialogsData = [
		{ id: 1, name: 'Nikita' },
		{ id: 2, name: 'Nikita' },
		{ id: 3, name: 'Nikita' },
		{ id: 4, name: 'Nikita' },
		{ id: 5, name: 'Nikita' },
		{ id: 6, name: 'Nikita' }
	]

	let MessagesData = [
		{ id: 1, text: ' Are you useless?' },
		{ id: 2, text: ' Are you useless?' },
		{ id: 3, text: ' Are you useless?' },
		{ id: 4, text: ' Are you useless?' },
		{ id: 5, text: ' Are you useless?' },
		{ id: 6, text: ' Are you useless?' },
	]
	let DialogsElement = DialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
	let MessagesElement = MessagesData.map(m => <MessageItem text={m.text} />)
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
import React from 'react';
import s from './MessageItem.module.css';

const MessageItem = (props) => {
	let newMessageElement = React.createRef();
	let addMessages = () => {
		let text = newMessageElement.current.value;
		alert(text);
	}
	return (
		<div className={s.message}>
			{props.text}
			<textarea ref={newMessageElement}></textarea>
			<button onClick={addMessages}>Send</button>
		</div>
	)
}

export default MessageItem;
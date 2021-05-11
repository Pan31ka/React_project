import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let MyPostData = [
	{ id: 1, text: 'hi, how are you', like: '15' },
	{ id: 2, text: 'it my first project', like: '351' }
]
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

ReactDOM.render(<App MyPostData={MyPostData} DialogsData={DialogsData} MessagesData={MessagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

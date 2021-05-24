import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

import state, { subscribe } from './Redux/state';


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { addPost, updatePostText } from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

let renderEniteTree = (state) => {
	ReactDOM.render
		(<BrowserRouter>
			<App appState={state} addPost={addPost} updatePostText={updatePostText} />
		</BrowserRouter>,
			document.getElementById('root')
		);
}
renderEniteTree(state);

subscribe(renderEniteTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

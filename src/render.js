import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, updatePostText } from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

export let renderEniteTree = (state) => {
	ReactDOM.render
		(<BrowserRouter>
			<App appState={state} addPost={addPost} updatePostText={updatePostText} />
		</BrowserRouter>,
			document.getElementById('root')
		);
}
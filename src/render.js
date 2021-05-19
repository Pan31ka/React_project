import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost } from './Redux/state';
import { BrowserRouter } from 'react-router-dom';

export let renderEniteTree = (state) => {
	ReactDOM.render
		(<BrowserRouter>
			<App appState={state} addPost={addPost} />
		</BrowserRouter>,
			document.getElementById('root')
		);
}
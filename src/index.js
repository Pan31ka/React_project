import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

import store from './Redux/state';


import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { BrowserRouter } from 'react-router-dom';

let renderEniteTree = (state) => {
	ReactDOM.render
		(<BrowserRouter>
			<App appState={store.getState()} dispatch={store.dispatch.bind(store)} />
		</BrowserRouter>,
			document.getElementById('root')
		);
}
renderEniteTree(store.getState);

store.subscribe(renderEniteTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

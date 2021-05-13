import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dialogs from './components/navbar/sideBar_component/Dialogs/dialogs';
import Profile from './components/navbar/sideBar_component/Profile/profile';
import Music from './components/navbar/sideBar_component/Music/music';
import Settings from './components/navbar/sideBar_component/Settings/settings';
import News from './components/navbar/sideBar_component/News/news';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
	debugger;
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-wrapper-content'>
					<Route path="/dialogs" render={() => <Dialogs state={props.appState.MessagesPage} />} />
					<Route path="/profile" render={() => <Profile state={props.appState.PostsPage} />} />
					<Route path="/news" render={News} />
					<Route path="/music" render={Music} />
					<Route path="/setting" render={Settings} />
				</div>


			</div>
		</BrowserRouter>);
}

export default App;
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
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Settings} />
        </div>


      </div>
    </BrowserRouter>);
}

export default App;
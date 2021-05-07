import React from 'react';
import './App.css';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialog from './components/Dialogs/dialogs';
const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
      <Dialog/>
      </div>
      {/*<Profile />*/}
      
    </div>);
}

export default App;
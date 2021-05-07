import React from 'react';
import MyPost from './myposts/MyPost';
import s1 from  './Profile.module.css'
const Profile = () => {
    return <div className={s1.content}>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div className={s1.item}>
      ava + description
    </div>
      <MyPost/>
  </div>
}

export default Profile;
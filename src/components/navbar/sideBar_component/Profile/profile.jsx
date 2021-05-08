import React from 'react';
import MyPost from './myposts/MyPost';
import s1 from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = () => {
  return (
    <div className={s1.content}>
      <ProfileInfo />
      <MyPost />
    </div>
  )
}

export default Profile;
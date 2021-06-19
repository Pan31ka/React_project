import React from 'react';
import MyPost from './myposts/MyPost';
import MyPostContainer from './myposts/MyPostContainer';
import s1 from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {

	return (
		<div className={s1.content}>
			<ProfileInfo />
			<MyPostContainer store={props.store} />
		</div>
	)
}

export default Profile;
import React from 'react';
import MyPost from './myposts/MyPost';
import s1 from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {

	return (
		<div className={s1.content}>
			<ProfileInfo />
			<MyPost MyPostData={props.Profilestate.MyPostData} dispatch={props.dispatch} newPostText={props.Profilestate.newPostText} />
		</div>
	)
}

export default Profile;
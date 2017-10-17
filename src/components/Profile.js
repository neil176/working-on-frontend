import React from 'react';


const Profile = (props) => {
	if (props.user) {
		return (
			<div className="profile">
			<h3>This is {props.user.username}'s Profile</h3>
			<br />
			<img src={props.user.picture} height="100" width="150"/>
			</div>
		);
	} else {
		return null;
	}	
}


export default Profile;
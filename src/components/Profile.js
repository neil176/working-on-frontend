import React from 'react';


const Profile = (props) => {

	// should receive user info as props
	console.log(props)

	if (props.user) {
		return (
			<h3>This is {props.user.username}'s Profile</h3>
		);
	} else {
		return null;
	}
	
}


export default Profile;
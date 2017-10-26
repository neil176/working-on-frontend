import React from 'react';


const Profile = (props) => {
	if (props.user) {
		return (
			<div className="profile">
				<h3>{props.user.username}</h3>
				
				<img src={props.user.picture} alt=""/>
				<p>render some profile info here</p>
				<br />
			</div>
		);
	} else {
		return null;
	}	
}


export default Profile;
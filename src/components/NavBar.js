import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  	let content = null;
  	let homeUrl = "/"

// in order for url to be usefully shareable in future with viewing a profile page of some kind
  	if (props.user) {
  		homeUrl = `/users/${props.user.id}`
  	} 

// user is logged in -- show all navbar options
	if (props.isLoggedIn) {
		content = (
			<div className="navbar">
				<NavLink to={homeUrl} exact className="link" activeClassName="active">Home</NavLink>
				<NavLink to="/feed" exact className="link" activeClassName="active">Feed</NavLink>
	    		<NavLink to="/search" exact className="link" activeClassName="active">Search</NavLink>
	    		<NavLink to="/login" exact className="link" onClick={props.logOutUser} activeClassName="active">Logout</NavLink>
	    	</div>
		);
// user is not logged in -- only show login and signup
	} else {
		content = (
			<div>
				<NavLink to="/login" exact className="link" activeClassName="active">Login</NavLink>
			    <NavLink to="/signup" exact className="link" activeClassName="active">Sign Up</NavLink>
		    </div>
		);
	}

  return (content);

}

export default NavBar;

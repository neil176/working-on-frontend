import React from 'react';

import { Button } from 'semantic-ui-react'

const LogInButton = () => {

// may need to receive a callback to change state of parent {loggingIn: true}
// or be a NavLink??? 
// seec omments in signup button

	return (
		<Button fluid>Log In</Button>
	);
}

export default LogInButton;
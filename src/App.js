import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';


const home = () => {
  return (
    <p>this is the home route "/"</p>
  )
}

const login = () => {
  return (
    <p>login here</p>
  )
}

const signup = () => {
  return (
    <p>signup here</p>
  )
}




class App extends Component {
  render() {
    return (
      <div>

          <Route path="/" component={home} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} /> 

      </div>
    );
  }
}

export default App;

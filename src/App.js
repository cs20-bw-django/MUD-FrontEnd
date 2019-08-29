import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

class App extends React.Component {
  render() {
    return (
      <div className= "App">
        <Route exact path= '/' component={Login} />
        <Route exact path = '/register' component={Register} />
      </div>
    );
  }
}

export default App;

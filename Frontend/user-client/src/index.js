import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogIn from './Components/LogIn';
import SignUp from './Components/Signup';
import Menu from './Components/Menu';


ReactDOM.render(
    <Router>
      <div>

        <Route exact path="/:tenant" component={LogIn} />
        <Route exact path="/signup/:tenant" component={SignUp} />
        <Route exact path="/menu/:tenant" component={Menu} />
      </div>
    </Router>,
  document.getElementById('root')
);


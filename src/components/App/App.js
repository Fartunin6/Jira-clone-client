import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components import
import SignInPage from '../../pages/AuthPages/SignInPage';
import SignUpPage from '../../pages/AuthPages/SignUpPage';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact />

        <Route path="/sign-in" component={SignInPage} />
        <Route path="/sign-up" component={SignUpPage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;

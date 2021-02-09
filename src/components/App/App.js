import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// components import
import SignInPage from '../pages/AuthPages/SignInPage';
import SignUpPage from '../pages/AuthPages/SignUpPage';
import ConfirmPage from '../pages/AuthPages/ConfirmPage';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact />

        <Route path="/auth/sign-in" component={SignInPage} />
        <Route path="/auth/sign-up" component={SignUpPage} />
        <Route path="/auth/:token" component={ConfirmPage} />

        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;

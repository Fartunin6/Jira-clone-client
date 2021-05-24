import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// components import
import SignInPage from './components/pages/authPages/SignInPage';
import SignUpPage from './components/pages/authPages/SignUpPage';
import ConfirmPage from './components/pages/authPages/ConfirmPage';
import MainPage from './components/pages/MainPage/MainPage';
import BoardPage from './components/pages/BoardPage/BoardPage';

const Routes = () => {
  const { token } = useSelector(({ auth }) => ({ token: auth.token }));

  if (!token) {
    return (
      <Switch>
        <Route path="/auth/sign-in" component={SignInPage} />
        <Route path="/auth/sign-up" component={SignUpPage} />
        <Route path="/auth/confirm/:token" component={ConfirmPage} />

        <Redirect to="/auth/sign-in" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/board/:id" component={BoardPage} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;

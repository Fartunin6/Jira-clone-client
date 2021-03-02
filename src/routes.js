import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { USER_STORAGE } from './constants/storages';

// components import
import SignInPage from './components/pages/authPages/SignInPage';
import SignUpPage from './components/pages/authPages/SignUpPage';
import ConfirmPage from './components/pages/authPages/ConfirmPage';
import { setUserData } from './action-creators/signin-actions';

const Routes = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(({ auth }) => ({ token: auth.token }));

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem(USER_STORAGE));
    if (storageData) {
      dispatch(setUserData(storageData));
    }
  }, []);

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
      <Route path="/" exact />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import eyeIcon from '../../assets/images/eye.png';
import { REDUX_FORMS } from '../../constants/redux-forms';

let SignUpForm = ({ handleSubmit, showPassword, onPasswordTypeChange }) => {
  return (
    <form onSubmit={handleSubmit} className="auth__form  sign-up__form">
      <Field type="text" placeholder="Full name" name="fullName" component="input" />
      <Field type="text" placeholder="E-mail" name="email" component="input" />

      <div className="password-container">
        <Field
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          name="password"
          component="input"
        />
        <img
          src={eyeIcon}
          alt="eye"
          className="password-container__image"
          onClick={onPasswordTypeChange}
        />
      </div>

      <button type="submit">sign up</button>
    </form>
  );
};

SignUpForm = reduxForm({ form: REDUX_FORMS.SIGN_UP_FORM })(SignUpForm);

export default SignUpForm;

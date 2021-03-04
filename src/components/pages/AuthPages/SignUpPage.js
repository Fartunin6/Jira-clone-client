import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser } from '../../../redux/action-creators/auth-actions';
import SignUpForm from '../../forms/SignUpForm';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordTypeChange = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (values) => {
    dispatch(signUpUser(values));
  };

  return (
    <section className="sign-up container">
      <h2 className="auth__title">Create an account</h2>

      <SignUpForm
        onSubmit={handleSubmit}
        showPassword={showPassword}
        onPasswordTypeChange={onPasswordTypeChange}
      />

      <div className="link-container">
        <Link to="/auth/sign-in/">already have an account?</Link>
      </div>
    </section>
  );
};

export default SignUpPage;

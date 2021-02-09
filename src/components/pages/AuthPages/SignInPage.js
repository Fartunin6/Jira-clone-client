import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignInForm from '../../forms/SignInForm';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordTypeChange = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (values) => {};

  return (
    <section className="sign-in container">
      <h2 className="auth__title">Sign in to Jira</h2>

      <SignInForm
        onSubmit={handleSubmit}
        showPassword={showPassword}
        onPasswordTypeChange={onPasswordTypeChange}
      />

      <div className="link-container">
        <Link to="/auth/sign-up/">don't have an account?</Link>
      </div>
    </section>
  );
};

export default SignInPage;

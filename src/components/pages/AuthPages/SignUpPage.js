import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../../forms/SignUpForm';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordTypeChange = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (values) => {};

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

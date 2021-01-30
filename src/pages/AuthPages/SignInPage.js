import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eyeIcon from '../../assets/images/eye.png';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordTypeChange = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="sign-in container">
      <h2 className="auth__title">Sign in to Jira</h2>

      <form className="auth__form  sign-in__form">
        <input type="text" placeholder="E-mail" name="email" />

        <div className="password-container">
          <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" />
          <img
            src={eyeIcon}
            alt="eye"
            className="password-container__image"
            onClick={onPasswordTypeChange}
          />
        </div>

        <button type="button">sign in</button>
      </form>

      <div className="link-container">
        <Link to="/auth/sign-up/">don't have an account?</Link>
      </div>
    </section>
  );
};

export default SignInPage;

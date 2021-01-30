import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eyeIcon from '../../assets/images/eye.png';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onPasswordTypeChange = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="sign-up container">
      <h2 className="auth__title">Create an account</h2>

      <form className="auth__form  sign-up__form">
        <input type="text" placeholder="Full name" name="fullName" />
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

        <button type="button">sign up</button>
      </form>

      <div className="link-container">
        <Link to="/auth/sign-in/">already have an account?</Link>
      </div>
    </section>
  );
};

export default SignUpPage;

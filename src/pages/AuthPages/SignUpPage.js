import React, { useState } from 'react';

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
            src="images/eye.png"
            alt="eye"
            className="password-container__image"
            onClick={onPasswordTypeChange}
          />
        </div>

        <button type="button">sign up</button>
      </form>
    </section>
  );
};

export default SignUpPage;

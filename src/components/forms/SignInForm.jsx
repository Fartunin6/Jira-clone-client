import React from 'react';
import { Field, reduxForm } from 'redux-form';
import eyeIcon from '../../assets/images/eye.png';
import { REDUX_FORMS } from '../../constants/redux-forms';

let SignInForm = props => {
    const { handleSubmit, showPassword, onPasswordTypeChange } = props;

    return (
        <form onSubmit={ handleSubmit } className="auth__form  sign-in__form">
            <Field type="text" component="input" placeholder="E-mail" name="email" />

            <div className="password-container">
            <Field type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" component='input' />
            <img
                src={eyeIcon}
                alt="eye"
                className="password-container__image"
                onClick={onPasswordTypeChange}/>
            </div>

            <button type="submit">sign in</button>
        </form>
    )
}
 
SignInForm = reduxForm({
    form: REDUX_FORMS.SIGN_IN_FORM
})(SignInForm);

export default SignInForm;




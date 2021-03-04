import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { activationUser } from '../../../redux/action-creators/auth-actions';

const ConfirmPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  useEffect(() => {
    dispatch(activationUser(token));
  }, [token]);

  return (
    <section className="confirm container">
      <Link to="/auth/sign-in/" className="auth__link">
        Return to sign in page
      </Link>
    </section>
  );
};

export default ConfirmPage;

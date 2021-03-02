import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { activationUser } from '../../../action-creators/activation-actions';

const ConfirmPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  useEffect(() => {
    dispatch(activationUser(token));
  }, [token]);

  return <section className="confirm container"></section>;
};

export default ConfirmPage;

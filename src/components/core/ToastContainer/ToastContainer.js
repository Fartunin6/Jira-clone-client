import React, { useEffect } from 'react';
import { ToastContainer as Container } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { showSuccess, showErrors } from '../../../helpers/alerts';
import { clearError, clearSuccess } from '../../../redux/action-creators/api-actions';

const ToastContainer = () => {
  const dispatch = useDispatch();
  const { errorMessage, successMessage } = useSelector(({ api }) => api);

  useEffect(() => {
    if (errorMessage) {
      showErrors([errorMessage.error], () => dispatch(clearError()));
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      showSuccess([successMessage.message], () => dispatch(clearSuccess()));
    }
  }, [successMessage]);

  return <Container />;
};

export default ToastContainer;

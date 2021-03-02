import React, { useEffect } from 'react';
import { ToastContainer as Container } from 'react-toastify';
import { useSelector } from 'react-redux';
import { showSuccess, showErrors } from '../../../helpers/alerts';

const ToastContainer = () => {
  const { errorMessage, successMessage } = useSelector(({ api }) => api);

  useEffect(() => {
    if (errorMessage) {
      showErrors([errorMessage.error]);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (successMessage) {
      showSuccess([successMessage.message]);
    }
  }, [successMessage]);

  return <Container />;
};

export default ToastContainer;

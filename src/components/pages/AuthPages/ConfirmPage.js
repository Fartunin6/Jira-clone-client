import React from 'react';
import { useParams } from 'react-router-dom';

const ConfirmPage = () => {
  const { token } = useParams();
  console.log(token);
  return <section className="confirm container"></section>;
};

export default ConfirmPage;

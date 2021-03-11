import React from 'react';
import withAuth from '../../../hoc/withAuth';
import Routes from '../../../routes';

const Content = () => {
  return (
    <div>
      <div>Header</div>
      <Routes />
      <div>Footer</div>
    </div>
  );
};

export default withAuth(Content);

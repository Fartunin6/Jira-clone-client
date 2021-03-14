import React from 'react';
import withAuth from '../../../hoc/withAuth';
import Routes from '../../../routes';
import { useSelector } from 'react-redux';
import Preloader from '../Preloader/Preloader';
import Header from '../../Header/Header';

const Content = () => {
  const { isLoading, token } = useSelector(({ auth, api }) => ({
    isLoading: api.isLoading,
    token: auth.token,
  }));

  return (
    <div className="content-wrapper">
      {token && <Header />}
      <div className="content">
        <Routes />
      </div>
      {token && <div className="footer">Footer</div>}
      {isLoading && <Preloader />}
    </div>
  );
};

export default withAuth(Content);

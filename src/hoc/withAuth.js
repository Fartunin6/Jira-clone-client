import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { USER_STORAGE } from '../constants/storages';
import { getCurrentUser } from '../redux/action-creators/auth-actions';

const withAuth = (Wrapped) => {
  return (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
      const token = localStorage.getItem(USER_STORAGE);

      if (token) {
        dispatch(getCurrentUser(token));
      }
    }, []);

    return <Wrapped {...props} />;
  };
};

export default withAuth;

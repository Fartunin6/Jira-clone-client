import React from 'react';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../../redux/action-creators/auth-actions';

const MainPage = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <button onClick={() => dispatch(resetUser())}>log out</button>
      main page
    </section>
  );
};

export default MainPage;

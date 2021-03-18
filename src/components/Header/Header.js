import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetUser } from '../../redux/action-creators/auth-actions';

import homeIcon from '../../assets/images/home.png';
import ProfileDropDown from '../dropDowns/ProfileDropDown/ProfileDropDown';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => auth);

  const logOut = () => {
    dispatch(resetUser());
  };

  return (
    <header className="header">
      <div>
        <Link to="/">
          <button className="circle-with-image" type="button">
            <img src={homeIcon} alt="home" />
          </button>
        </Link>
      </div>

      <div>
        <Link to="" className="header__logo">
          Jira clone
        </Link>
      </div>

      <div>
        <ProfileDropDown user={user} logOut={logOut} />
      </div>
    </header>
  );
};

export default Header;

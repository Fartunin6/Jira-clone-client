import React from 'react';
import { useSelector } from 'react-redux';
import profileIcon from '../../assets/images/profile.png';
import DropDown from '../core/DropDown/DropDown';

const Header = () => {
  const { user } = useSelector(({ auth }) => auth);

  return (
    <header className="header">
      <div></div>
      <div></div>
      <div className="header__profile">
        <DropDown
          Trigger={() => (
            <button className="circle-with-image" type="button">
              <img src={profileIcon} alt="profile" />
            </button>
          )}>
          <div className="header__profile-content">
            <h3 className="drop-down__title">User account</h3>

            <div className="header__profile-info">
              <img src={profileIcon} alt="profile" />

              <div className="header__profile-container">
                <span className="header__profile-name">{user.name}</span>
                <span className="header__profile-email">{user.email}</span>
              </div>
            </div>

            <div className="header__profile-line"></div>
          </div>
        </DropDown>
      </div>
    </header>
  );
};

export default Header;

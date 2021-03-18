import React from 'react';
import profileIcon from '../../../assets/images/profile.png';
import DropDown from '../../core/DropDown/DropDown';

const ProfileDropDown = ({ user, logOut }) => {
  return (
    <DropDown
      Trigger={() => (
        <button className="circle-with-image" type="button">
          <img src={profileIcon} alt="profile" />
        </button>
      )}>
      <div className="profile">
        <h3 className="drop-down__title">User account</h3>

        <div className="profile__info">
          <img src={profileIcon} alt="profile" />

          <div className="profile__container">
            <span className="profile__name">{user.name}</span>
            <span className="profile__email">{user.email}</span>
          </div>
        </div>

        <div className="profile__line"></div>

        <div onClick={() => logOut()} className="profile__logout">
          Log out
        </div>
      </div>
    </DropDown>
  );
};

export default ProfileDropDown;

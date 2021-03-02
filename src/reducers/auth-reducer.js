import { SET_USER } from '../action-types';

const initialState = {
  token: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;

import { RESET_USER, SET_USER } from '../action-types/auth-types';

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
    case RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;

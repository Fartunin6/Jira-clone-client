const { SET_BACKGROUNDS } = require('../action-types/background-types');

const initialState = {
  backgrounds: [],
};

const backgroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BACKGROUNDS:
      return {
        backgrounds: action.payload.data,
      };
    default:
      return state;
  }
};

export default backgroundReducer;

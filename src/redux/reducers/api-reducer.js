import {
  API_END,
  API_ERROR,
  API_START,
  API_SUCCESS,
  CLEAR_ERROR,
  CLEAR_SUCCESS,
} from '../action-types/api-types';

const initialState = {
  isLoading: false,
  successMessage: null,
  errorMessage: null,
};

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_START:
      return {
        ...state,
        isLoading: true,
      };
    case API_END:
      return {
        ...state,
        isLoading: false,
      };
    case API_SUCCESS:
      return {
        ...state,
        successMessage: { message: action.payload },
      };
    case API_ERROR:
      return {
        ...state,
        errorMessage: { error: action.payload },
      };
    case CLEAR_SUCCESS:
      return {
        ...state,
        successMessage: null,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        errorMessage: null,
      };
    default:
      return state;
  }
};

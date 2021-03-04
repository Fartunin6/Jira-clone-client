import { API_END, API_ERROR, API_START, API_SUCCESS } from '../action-types/api-types';

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
    default:
      return state;
  }
};

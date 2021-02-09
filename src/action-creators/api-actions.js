import { ACCESS_DENIED, API, API_END, API_ERROR, API_START, API_SUCCESS } from '../action-types';

export const apiStart = (label) => ({
  type: API_START,
  payload: label,
});

export const apiEnd = (label) => ({
  type: API_END,
  payload: label,
});

export const accessDenied = (url) => ({
  type: ACCESS_DENIED,
  payload: {
    url,
  },
});

export const apiError = (error) => ({
  type: API_ERROR,
  payload: error,
});

export const apiAction = ({
  url = '',
  method = 'GET',
  data = null,
  accessToken = null,
  onSuccess = () => ({ type: API_SUCCESS }),
  onFailure = () => ({ type: API_ERROR }),
  label = '',
  headersOverride = null,
}) => {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      accessToken,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
};

import { API } from '../action-types';
import axios from 'axios';
import { accessDenied, apiEnd, apiError, apiStart } from '../action-creators/api-actions';

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type === API) return;

  const { url, method, data, accessToken, onSuccess, onFailure, label, headers } = action.payload;

  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  axios.defaults.baseURL = process.env.REACT_APP_API_URL || '';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch((error) => {
      dispatch(apiError(error.response.data));
      dispatch(onFailure(error.response.data));

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname));
      }
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

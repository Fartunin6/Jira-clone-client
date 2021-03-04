import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { apiMiddleware } from './middlewares/apiMiddleware';
import { apiReducer } from './redux/reducers/api-reducer';
import authReducer from './redux/reducers/auth-reducer';

const rootReducer = combineReducers({
  form: formReducer,
  api: apiReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(apiMiddleware, thunk)));

export default store;

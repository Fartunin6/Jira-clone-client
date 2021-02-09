import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { apiMiddleware } from './middlewares/apiMiddleware';

const rootReducer = combineReducers({
  form: formReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(apiMiddleware)));

export default store;

// вынести формы в отдельные компоненты и подключить redux-form
// добавить таски в trello

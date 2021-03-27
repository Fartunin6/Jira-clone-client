import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';
import ToastContainer from '../core/ToastContainer/ToastContainer';
import Content from '../core/Content/Content';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Provider store={store}>
          <ToastContainer />
          <Content />
        </Provider>
      </Router>
    </div>
  );
};

// стилизировать если нету ни одной доски
// доделать функционал с изменением имени
// попробывать увеличить bordу т. к. мало места

export default App;

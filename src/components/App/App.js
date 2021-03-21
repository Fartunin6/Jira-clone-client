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

// найти красивый прелоадер
// реализовать логику добавления / удаления нового boardа
// при нажатии на кнопку create new board открываем модалку где вписываем title, descr, выбираем background (добавить его в схему)
// все красиво стелизировать

export default App;

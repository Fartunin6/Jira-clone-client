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

// todo
// добавить возможность удаления таблицы через админку
// добавить возможность создания новой таблицы для конкретного пользователя через админку
// тоесть я нажимаю где-то на кнопку добавить, затем я заполняю форму (title, bgs, descr) и у меня есть select в котором весь список пользывателей
// и к выбаному пользывателю добавляю новый board
// https://marmelab.com/react-admin/doc/2.8/Readme.html

export default App;

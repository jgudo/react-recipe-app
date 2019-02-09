import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

library.add(faUtensils, faPen, faTrashAlt);

WebFont.load({
  google: { families: ['Open Sans: 400, 600'] }
});

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);

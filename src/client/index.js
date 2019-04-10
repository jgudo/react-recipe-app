import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebFont from 'webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faUtensils, 
  faPen, 
  faTrashAlt, 
  faSave,
  faListUl,
  faPlus,
  faAngleUp, 
  faAngleDown,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

library.add(
  faUtensils, 
  faPen, 
  faTrashAlt, 
  faSave, 
  faListUl, 
  faPlus, 
  faAngleDown, 
  faAngleUp,
  faBars,
  faTimes
);

WebFont.load({
  google: { families: ['Source Sans Pro', 'Carter One'] }
});

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('SW registered: ', registration);
  }).catch((registrationError) => {
    console.log('SW registration failed: ', registrationError);
  });
}

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);

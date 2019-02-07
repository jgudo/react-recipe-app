import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

import WebFont from 'webfontloader';

WebFont.load({
  google: { families: ['Roboto'] }
});

const App = () => (
  <div>
    <h1>Welcome to Recipe App</h1>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

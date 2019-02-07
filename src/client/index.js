import React from 'react';
import ReactDOM from 'react-dom';

import WebFont from 'webfontloader';
import RecipeApp from './components/RecipeApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';

WebFont.load({
  google: { families: ['Roboto'] }
});

ReactDOM.render(<RecipeApp />, document.getElementById('app'));

import { createStore } from 'redux';
import recipeListReducer from './reducers/recipeListReducer';

export default () => {
  const store = createStore(recipeListReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return store;
};

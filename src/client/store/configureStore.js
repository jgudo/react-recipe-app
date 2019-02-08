import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import recipeListReducer from './reducers/recipeListReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localStorageMiddleware = (store) => {
  return next => (action) => {
    const result = next(action);
    localStorage.setItem('myRecipes', JSON.stringify(
      store.getState()
    ));
    return result;
  };
};

const reHydrateStore = () => { 
  if (localStorage.getItem('myRecipes') !== null) {
    return JSON.parse(localStorage.getItem('myRecipes'));
  }
  return undefined;
};

export default () => {
  const store = createStore(
    recipeListReducer, 
    reHydrateStore(),
    composeEnhancers(applyMiddleware(
      localStorageMiddleware,
      thunk
    ))
  );
  return store;
};

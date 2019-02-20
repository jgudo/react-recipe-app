import { 
  createStore, 
  combineReducers, 
  applyMiddleware, 
  compose 
} from 'redux';
import thunk from 'redux-thunk';
import recipeListReducer from './reducers/recipeListReducer';
import recipeFilterReducer from './reducers/recipeFilterReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const localStorageMiddleware = (store) => {
  return next => (action) => {
    const result = next(action);
    try {
      localStorage.setItem('myRecipes', JSON.stringify(
        store.getState()
      ));
    } catch (e) {
      console.log('Error while saving in localStorage', e);
    }
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
    combineReducers({
      recipes: recipeListReducer, 
      filter: recipeFilterReducer
    }), 
    reHydrateStore(),
    composeEnhancers(applyMiddleware(
      localStorageMiddleware,
      thunk
    ))
  );
  return store;
};

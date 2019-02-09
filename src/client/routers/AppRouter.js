import React from 'react';
import { 
  Router, 
  Switch, 
  Route
} 
  from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RecipeApp from '../components/RecipeApp';
import AddNewRecipe from '../components/AddNewRecipe';
import EditRecipe from '../components/EditRecipe';
import Navigation from '../components/Navigation';
import ViewRecipe from '../components/ViewRecipe';
import PageNotFound from '../components/PageNotFound';

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div className="container">
        <div className="content">
          <div className="navigation">
            <div className="navigation-wrapper">
              <Navigation />
            </div>
          </div>
          <Switch>
            <Route 
              component={RecipeApp} 
              path="/"
              exact
            />
            <Route 
              component={AddNewRecipe} 
              path="/addrecipe"
            />
            <Route 
              component={EditRecipe} 
              path="/edit/recipe/:id"
            />
            <Route 
              component={ViewRecipe} 
              path="/view/recipe/:id"
            />
            <Route 
              component={PageNotFound} 
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;

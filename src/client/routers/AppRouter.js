import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import RecipeApp from '../components/RecipeApp';
import AddNewRecipe from '../components/AddNewRecipe';
import EditRecipe from '../components/EditRecipe';
import ViewRecipe from '../components/ViewRecipe';
import PageNotFound from '../components/PageNotFound';
import Navigation from '../components/Navigation';

export const history = createHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <>
        <Navigation />
        <div className="content">
          <Switch>
            <Route 
                component={RecipeApp} 
                exact
                path="/"
            />
            <Route 
                component={AddNewRecipe} 
                exact
                path="/addrecipe"
            />
            <Route 
                component={EditRecipe} 
                exact
                path="/edit/recipe/:id"
            />
            <Route 
                component={ViewRecipe} 
                exact
                path="/view/recipe/:id"
            />
            <Route 
                component={PageNotFound} 
            />
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default AppRouter;

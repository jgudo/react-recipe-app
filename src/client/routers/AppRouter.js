import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecipeApp from '../components/RecipeApp';
import AddNewRecipe from '../components/AddNewRecipe';
import EditRecipe from '../components/EditRecipe';
import Navigation from '../components/Navigation';
import ViewRecipe from '../components/ViewRecipe';

const AppRouter = () => {
  return (
    <Router>
      <div className="container">
        <div className="navigation">
          <div className="navigation-wrapper">
            <Navigation />
          </div>
        </div>
        <div className="content">
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
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;

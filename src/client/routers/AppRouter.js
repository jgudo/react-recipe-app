import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecipeApp from '../components/RecipeApp';
import AddNewRecipe from '../components/AddNewRecipe';
import Navigation from '../components/Navigation';

const AppRouter = () => (
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
            component={AddNewRecipe} 
            path="/recipe/:id"
          />
        </Switch>
      </div>
    </div>
  </Router>
);

export default AppRouter;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecipeApp from '../components/RecipeApp';
import AddNewRecipe from '../components/AddNewRecipe';

const AppRouter = () => (
  <Router>
    <div>
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
      </Switch>
    </div>
  </Router>
);

export default AppRouter;

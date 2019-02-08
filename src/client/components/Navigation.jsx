import React from 'react';
import { Link } from 'react-router-dom';
import RecipeList from './RecipeList';

const Navigation = () => (
  <div>
    <Link to="/" exact="true">
      <h4>View All My Recipes</h4>
    </Link>
    <Link to="/addrecipe">
      <h4>Add New Recipe</h4>
    </Link>
    <RecipeList />
  </div>
);

export default Navigation;

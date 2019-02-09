import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecipeList from './RecipeList';

const Navigation = () => (
  <div className="navigation-wrapper">
    <Link 
      className="button--link"
      exact="true"
      to="/" 
    >
      <button 
        className="button--primary button--block button--icon"
      >
        <FontAwesomeIcon 
            color="#fff"
            icon="list-ul" 
            size="1x"
        />
        <span>View All My Recipes</span>
      </button>
    </Link>
    <br/>
    <Link 
      className="button--link"
      to="/addrecipe"
    >
      <button 
        className="button--primary button--block button--icon"
      >
        <FontAwesomeIcon 
            color="#fff"
            icon="plus" 
            size="1x"
        />
        <span>Add New Recipe</span>
      </button>
    </Link>
    <RecipeList />
  </div>
);

export default Navigation;

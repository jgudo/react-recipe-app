import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const RecipeList = props => (
  <div>
    {props.recipes.length !== 0 ? props.recipes.map(recipe => (
      <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
        <p>{recipe.title}</p>
      </Link>
    )) : (
      <p>You have no recipe</p>
    )}
  </div>
);

const mapStateToProps = state => ({
  recipes: state
});

export default connect(mapStateToProps, undefined)(RecipeList);

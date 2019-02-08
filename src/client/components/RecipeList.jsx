import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const RecipeList = props => (
  <div className="recipe-list">
    {props.recipes.length !== 0 ? props.recipes.map(recipe => (
      <React.Fragment>
        <h3>My Recipes</h3>
        <Link to={`/view/recipe/${recipe.id}`} key={recipe.id}>
          <p>{recipe.title}</p>
        </Link>
      </React.Fragment>
    )) : (
      <p>You have no recipe</p>
    )}
  </div>
);

const mapStateToProps = state => ({
  recipes: state
});

export default connect(mapStateToProps, undefined)(RecipeList);

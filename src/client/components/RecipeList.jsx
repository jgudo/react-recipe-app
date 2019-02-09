import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const RecipeList = props => (
  <div className="recipe-list">
    {props.recipes.length !== 0 ? (
      <React.Fragment>
        <h3>My Recipes</h3>
        {props.recipes.map(recipe => (
        <Link 
          className="recipe-item"
          key={recipe.id}
          to={`/view/recipe/${recipe.id}`} 
        > 
          <div className="recipe-item-wrapper">
            <div className="recipe-thumbnail">
              <img src={recipe.image}/>
            </div>
            <h4>{recipe.title}</h4>
          </div>
        </Link>
        ))}
      </React.Fragment>  
    ) : (
      <p>You have no recipe</p>
    )}
  </div>
);

const mapStateToProps = state => ({
  recipes: state
});

export default connect(mapStateToProps, undefined)(RecipeList);

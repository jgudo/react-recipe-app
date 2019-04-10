import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import RecipeItem from './RecipeItem';
import FilterRecipe from './FilterRecipe';
import filterRecipe from '../helpers/filterRecipe';
import { deleteRecipe, deleteAllRecipe } from '../store/actions/recipes';

const RecipeApp = (props) => {
  useEffect(() => {
    window.scrollTo(null, 0);
  }, []);

  const { recipes, filter } = props;
  
  return (
    <div className="recipe-list-main fadeIn">
      <div className="recipe-list-header">
        <h1>My Recipe Box</h1>
        <FilterRecipe />
      </div>
      {(filter.title && recipes.length !== 0) && (
        <h4 className="filter__text">
          Found {recipes.length}{` ${recipes.length > 1 ? 'recipes' : 'recipe'}`}
        </h4>
      )}
      <div className="card-wrapper">
        {recipes.length !== 0 && (
          recipes.map(recipe => (
              <RecipeItem 
                  key={recipe.id}
                  recipe={recipe} 
              />
          ))
        )}
      </div>
      {recipes.length === 0 && (
        <div style={{ textAlign: 'center' }}>
          <h2>No Recipe Found</h2>
          <p>
            Start listing your recipe now. Your data will be saved to 
            your localStorage.
          </p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ recipes, filter }) => ({
  recipes: filterRecipe(recipes, filter),
  filter
});

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id)),
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeApp);

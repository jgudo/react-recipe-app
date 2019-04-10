import React from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { deleteRecipe, deleteAllRecipe } from '../store/actions/recipes';

export const ViewRecipe = ({ recipe }) => {
  return (
    <div className="fadeIn">
      <span 
          className="card-subtitle"
          style={{
            position: 'relative',
            top: '15px'
          }}
      >
      Delicious
      </span>
      <h1>{recipe.title}</h1>
      <div className="view-card">
        <div className="card-wrapper">
          <RecipeItem recipe={recipe}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ recipes }, props) => {
  return {
    recipe: recipes.find(recipe => recipe.id === props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id)),
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipe);

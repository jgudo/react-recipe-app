import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editRecipe } from '../store/actions/recipes';
import RecipeForm from './RecipeForm';

export class EditRecipe extends Component {
  onSubmitHandler = (recipe) => {
    this.props.editRecipe(this.props.recipe.id, recipe);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <RecipeForm 
          recipe={this.props.recipe}
          onSubmit={this.onSubmitHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  recipe: state.find(recipe => recipe.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editRecipe: (id, recipe) => dispatch(editRecipe(id, recipe))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);

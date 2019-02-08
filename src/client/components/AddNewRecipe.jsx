import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addNewRecipe } from '../store/actions/recipes';

export class AddNewRecipe extends Component {
  onSubmit = (recipe) => {
    this.props.addNewRecipe(recipe);
  }

  render() {
    return (
      <div>
        <RecipeForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewRecipe: recipe => dispatch(addNewRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(AddNewRecipe);

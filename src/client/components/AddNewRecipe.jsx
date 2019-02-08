import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addNewRecipe } from '../store/actions/recipes';

export class AddNewRecipe extends Component {
  onSubmit = (recipe) => {
    this.props.addNewRecipe(recipe);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Add New Recipe</h1>
        <RecipeForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewRecipe: recipe => dispatch(addNewRecipe(recipe))
});

export default connect(undefined, mapDispatchToProps)(AddNewRecipe);

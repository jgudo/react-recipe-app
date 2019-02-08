import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

export class ViewRecipe extends Component {
  render() {
    return (
      <div>
        <RecipeItem recipe={this.props.recipe} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    recipe: state.find(recipe => recipe.id === props.match.params.id)
  };
};

export default connect(mapStateToProps, undefined)(ViewRecipe);

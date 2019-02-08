import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

export class RecipeApp extends Component {
  render() {
    return (
      <div>
        <h1>My Recipe List</h1>
        {this.props.recipes.lenth !== 0 ? (
          this.props.recipes.map(recipe => (
            <div key={recipe.id}>
              <RecipeItem recipe={recipe} />
            </div>
          ))
        ) : (
          <h3>
            Start making your recipes
          </h3>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state
});

export default connect(mapStateToProps, undefined)(RecipeApp);

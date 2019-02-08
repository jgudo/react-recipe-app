import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

export class RecipeApp extends Component {
  render() {
    return (
      <div>
        <h1>My Recipe Box</h1>
        {this.props.recipes.length !== 0 ? (
          this.props.recipes.map(recipe => (
            <div key={recipe.id}>
              <RecipeItem recipe={recipe} />
            </div>
          ))
        ) : (
          <React.Fragment>
            <h3>Start listing your recipes</h3>
            <p>Your data will be saved to your localStorage</p>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state
});

export default connect(mapStateToProps, undefined)(RecipeApp);

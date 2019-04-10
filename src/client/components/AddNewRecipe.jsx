import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import { addNewRecipe, deleteAllRecipe } from '../store/actions/recipes';

export class AddNewRecipe extends Component {
  constructor(props) {
    super(props);

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    window.scrollTo(null, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onSubmit = (recipe) => {
    if (this._isMounted) {
      this.props.addNewRecipe(recipe);
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="fadeIn">
        <h1>Add Recipe</h1>
        <RecipeForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addNewRecipe: recipe => dispatch(addNewRecipe(recipe)),
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(undefined, mapDispatchToProps)(AddNewRecipe);

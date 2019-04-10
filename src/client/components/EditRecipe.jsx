import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editRecipe, deleteAllRecipe } from '../store/actions/recipes';
import RecipeForm from './RecipeForm';

export class EditRecipe extends Component {
  constructor(props) {
    super(props);

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    if (!this.props.recipe ) {
      this.props.history.push('/error');
    }
    window.scrollTo(null, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onSubmitHandler = (recipe) => {
    if (this._isMounted) {
      this.props.editRecipe(this.props.recipe.id, recipe);
      this.props.history.push(`/view/recipe/${this.props.recipe.id}`);
    }
  }

  render() {
    return (
      <div className="fadeIn">
        <h1>Edit Recipe</h1>
        <RecipeForm 
            onSubmit={this.onSubmitHandler}
            recipe={this.props.recipe}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ recipes }, props) => ({
  recipe: recipes.find(recipe => recipe.id === props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  editRecipe: (id, recipe) => dispatch(editRecipe(id, recipe)),
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);

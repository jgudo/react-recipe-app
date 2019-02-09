import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editRecipe, deleteAllRecipe } from '../store/actions/recipes';
import RecipeForm from './RecipeForm';
import Navigation from './Navigation';
import Modal from './Modal';

export class EditRecipe extends Component {
  state = {
    isVisibleDeleteAllModal: false
  };

  onDeleteAll = () => {
    this.props.deleteAllRecipe();
    this.setState(() => ({ isVisibleDeleteAllModal: false }));
  };

  openModalHandlerDeleteAll = () => {
    this.setState(() => ({ isVisibleDeleteAllModal: true }));
  };

  closeModalHandlerDeleteAll = () => {
    this.setState(() => ({ isVisibleDeleteAllModal: false }));
  };

  onSubmitHandler = (recipe) => {
    this.props.editRecipe(this.props.recipe.id, recipe);
    this.props.history.push(`/view/recipe/${this.props.recipe.id}`);
  }

  render() {
    return (
      <div>
        <Modal
            className="modal"
            show={this.state.isVisibleDeleteAllModal}
            close={this.closeModalHandlerDeleteAll}
        >
          <h2>Sure to delete all recipes?</h2>
          <button 
              className="button--red"
              onClick={this.onDeleteAll}
          >
            Delete All
          </button>      
        </Modal>
        <div className="navigation">
          <Navigation modalOpen={this.openModalHandlerDeleteAll} />
        </div>
        <h1>Edit Recipe</h1>
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
  editRecipe: (id, recipe) => dispatch(editRecipe(id, recipe)),
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipe);

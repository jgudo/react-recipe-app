import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeForm from './RecipeForm';
import Navigation from './Navigation';
import Modal from './Modal';
import { addNewRecipe, deleteAllRecipe } from '../store/actions/recipes';

export class AddNewRecipe extends Component {
  state = {
    isVisibleDeleteAllModal: false
  };

  onDeleteAll = () => {
    this.props.deleteAllRecipe();
    this.setState(() => ({ isVisibleDeleteAllModal: false }));
    this.props.history.push('/');
  };

  openModalHandlerDeleteAll = () => {
    this.setState(() => ({ isVisibleDeleteAllModal: true }));
  };

  closeModalHandlerDeleteAll = () => {
    this.setState(() => ({ isVisibleDeleteAllModal: false }));
  };

  onSubmit = (recipe) => {
    this.props.addNewRecipe(recipe);
    this.props.history.push('/');
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
        <Navigation modalOpen={this.openModalHandlerDeleteAll} />
        <h1>Add New Recipe</h1>
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

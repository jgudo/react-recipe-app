import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { deleteRecipe, deleteAllRecipe } from '../store/actions/recipes';
import Modal from './Modal';
import Navigation from './Navigation';

export class RecipeApp extends Component {
  state = {
    isVisible: false,
    isVisibleDeleteAllModal: false,
    deleteAll: false,
    selectedKey: '',
    seletectedItem: ''
  };

  handleKey = (key, item) => {
    this.setState(() => ({ 
      selectedKey: key,
      selectedItem: item 
    }));
  };

  onDelete = () => {
    this.props.deleteRecipe(this.state.selectedKey);
    this.setState(() => ({ isVisible: false }));
    this.props.history.push('/');
  };
  
  onDeleteAll = () => {
    this.props.deleteAllRecipe();
    this.setState(() => ({ isVisibleDeleteAllModal: false }));
  };

  openModalHandler = () => {
    this.setState(() => ({ isVisible: true }));
  };
  
  openModalHandlerDeleteAll = () => {
    this.setState(() => ({ isVisibleDeleteAllModal: true }));
  };

  closeModalHandler = () => {
    this.setState(() => ({ 
      isVisible: false,
      isVisibleDeleteAllModal: false,
      selectedKey: '' 
    }));
  };

  render() {
    return (
      <div className="recipe-list-main">
        <div className="navigation">
          <Navigation modalOpen={this.openModalHandlerDeleteAll}/>
        </div>
        <Modal
            className="modal"
            show={this.state.isVisible}
            close={this.closeModalHandler}
        >
          <h2>Sure to delete {this.state.selectedItem}?</h2>
          <button 
              className="button--red"
              onClick={this.onDelete}
          >
            Delete
          </button>      
        </Modal>

        <Modal
            className="modal"
            show={this.state.isVisibleDeleteAllModal}
            close={this.closeModalHandler}
        >
          <h2>Sure to delete all recipes?</h2>
          <button 
              className="button--red"
              onClick={this.onDeleteAll}
          >
            Delete All
          </button>      
        </Modal>
        
        <h1>My Recipe Box</h1>
        <div className="card-wrapper">
          {this.props.recipes.length !== 0 ? (
            this.props.recipes.map(recipe => (
                <RecipeItem key={recipe.id}
                  confirm={this.onDeleteHandler} 
                  handleKey={this.handleKey}
                  modalOpen={this.openModalHandler}
                  /*eslint-disable*/
                  onRef={ref => (this.child = ref)}
                  /* eslint-enable */
                  recipe={recipe} />
            ))
          ) : (
            <div>
              <h3>Start listing your recipes</h3>
              <p>Your data will be saved to your localStorage</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state
});

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id)),
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeApp);

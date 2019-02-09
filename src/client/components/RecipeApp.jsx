import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { deleteRecipe } from '../store/actions/recipes';
import Modal from './Modal';

export class RecipeApp extends Component {
  state = {
    isVisible: false,
    selectedKey: ''
  };

  handleKey = (data) => {
    this.setState(() => ({ selectedKey: data }));
  };

  onDelete = () => {
    this.props.deleteRecipe(this.state.selectedKey);
    this.setState(() => ({ isVisible: false }));
    this.props.history.push('/');
  };

  openModalHandler = () => {
    this.setState(() => ({ isVisible: true }));
  };

  closeModalHandler = () => {
    this.setState(() => ({ 
      isVisible: false,
      selectedKey: '' 
    }));
  };

  render() {
    return (
      <div>
        <Modal
            className="modal"
            show={this.state.isVisible}
            close={this.closeModalHandler}
        >
          <h2>Sure to delete?</h2>
          <button 
              className="button--red"
              onClick={this.onDelete}
          >
            Delete
          </button>      
        </Modal>

        <h1>My Recipe Box</h1>
        <div className="card-wrapper">
          {this.props.recipes.length !== 0 ? (
            this.props.recipes.map(recipe => (
                <RecipeItem key={recipe.id}
                  data-key={recipe.id}
                  confirm={this.onDeleteHandler} 
                  handleKey={this.handleKey}
                  modalOpen={this.openModalHandler}
                  /*eslint-disable*/
                  onRef={ref => (this.child = ref)}
                  /* eslint-enable */
                  recipe={recipe} />
            ))
          ) : (
            <React.Fragment>
              <h3>Start listing your recipes</h3>
              <p>Your data will be saved to your localStorage</p>
            </React.Fragment>
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
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeApp);

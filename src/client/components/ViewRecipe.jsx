import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import Modal from './Modal';

export class ViewRecipe extends Component {
  state = {
    isVisible: false
  };

  onDelete = (e) => {
    this.child.onDeleteHandler();
    this.setState(() => ({ isVisible: false }));
  };

  openModalHandler = () => {
    this.setState(() => ({ isVisible: true }));
  };

  closeModalHandler = () => {
    this.setState(() => ({ isVisible: false }));
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
        <RecipeItem 
            confirm={this.onDeleteHandler} 
            modalOpen={this.openModalHandler}
            /*eslint-disable*/
            onRef={ref => (this.child = ref)}
            /* eslint-enable */
            recipe={this.props.recipe} 
        />
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

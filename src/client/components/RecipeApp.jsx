import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import Modal from './Modal';

export class RecipeApp extends Component {
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

        <h1>My Recipe Box</h1>
        <div className="card-wrapper">
          {this.props.recipes.length !== 0 ? (
            this.props.recipes.map(recipe => (
              <React.Fragment key={recipe.id}>
                <RecipeItem
                  confirm={this.onDeleteHandler} 
                  modalOpen={this.openModalHandler}
                  /*eslint-disable*/
                  onRef={ref => (this.child = ref)}
                  /* eslint-enable */
                  recipe={recipe} />
              </React.Fragment>
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

export default connect(mapStateToProps, undefined)(RecipeApp);

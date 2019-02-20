import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import { deleteRecipe, deleteAllRecipe } from '../store/actions/recipes';
import Modal from './Modal';
import Navigation from './Navigation';
import FilterRecipe from './FilterRecipe';
import filterRecipe from '../helpers/filterRecipe';

export class RecipeApp extends Component {
  state = {
    isVisible: false,
    isVisibleDeleteAllModal: false,
    deleteAll: false,
    selectedKey: '',
    seletectedItem: '',
    isMobile: false
  };

  componentDidMount() {
    if (window.screen.width <= 425) {
      this.setState(() => ({ isMobile: true }));
    } else {
      this.setState(() => ({ isMobile: false }));
    }
  }

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
    window.addEventListener('resize', () => {
      if (window.screen.width <= 425) {
        this.setState(() => ({ isMobile: true }));
      } else {
        this.setState(() => ({ isMobile: false }));
      }
    });

    return (
      <div className="recipe-list-main">
        <Navigation modalOpen={this.openModalHandlerDeleteAll}/>
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
        <FilterRecipe />
        {this.props.filter.title && (
          <p className="filter__text">Found {this.props.recipes.length} recipe</p>
        )}
        <div 
            className="card-wrapper"
            style={{
              columnCount: this.props.recipes.length > 1 && !this.state.isMobile ? '2' : '1'
            }}
        >
          {this.props.recipes.length !== 0 ? (
            this.props.recipes.map(recipe => (
                <RecipeItem key={recipe.id}
                  confirm={this.onDeleteHandler} 
                  handleKey={this.handleKey}
                  modalOpen={this.openModalHandler}
                  /*eslint-disable*/
                  onRef={ref => (this.child = ref)}
                  /* eslint-enable */
                  recipe={recipe} 
                />
            ))
          ) : (
            <div>
              <h3>You don't have any recipe</h3>
              <p>Start listing your recipe now. Your data will be saved to your localStorage</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: filterRecipe(state.recipes, state.filter),
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id)),
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeApp);

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import moment from 'moment';

import Modal from './Modal';
import foodBg from '../assets/images/food.jpg';
import { deleteRecipe } from '../store/actions/recipes';

class RecipeItem extends Component {
  state = {
    isOpenDeleteModal: false,
    isOpenRecipeModal: false
  };

  onDelete = () => {
    this.props.deleteRecipe(this.props.recipe.id);
    this.setState({ isOpenDeleteModal: false });
    this.props.history.push('/');
  };

  openModalHandler = () => {
    this.setState({ isOpenDeleteModal: true });
  };

  openRecipeModal = () => {
    this.setState({ isOpenRecipeModal: true });
  };
  
  closeModalHandler = () => {
    this.setState({ 
      isOpenDeleteModal: false,
      isOpenRecipeModal: false 
    });
  };

  render() {
    const { isOpenRecipeModal, isOpenDeleteModal } = this.state;
    const { recipe } = this.props;

    return (
      <div className="card">
        <Modal
            closeModal={this.closeModalHandler}
            isOpenModal={isOpenDeleteModal}
        >
          <h2>Sure to delete this recipe?</h2>
          <span style={{
            color: '#cacaca',
            fontSize: '12px',
            display: 'block',
            marginBottom: '20px'
          }}>
          {recipe.title}
          </span>
          <button 
              className="button--red"
              onClick={this.onDelete}
          >
            Delete
          </button>      
        </Modal>
        <Modal
            closeModal={this.closeModalHandler}
            isOpenModal={isOpenRecipeModal}
        >
          <div className="recipe-modal">
            <h2>{recipe.title}</h2>
            <div className="card-image">
              <img 
                  alt={recipe.title}
                  src={recipe.image ? recipe.image : foodBg}
              />    
            </div>
            {recipe.recipes ? ( 
              <div className="recipe-items">
                <span className="card-subtitle">Recipe:</span>
                <textarea
                    className="card-recipe-preview"
                    id="textarea-preview"
                    readOnly
                    rows={recipe.recipes.split(/\r\n|\r|\n/).length}
                    value={recipe.recipes}
                  />
              </div>
            ) : (
              <span className="card-subtitle">No recipe written yet</span>
            )}
          </div>
        </Modal>
        <div 
            className="card-header"
            style={{ 
              background: `url(${recipe.image ? recipe.image : foodBg})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
        >
          <div className="card-header-title">
            <h2 className="card-title">{recipe.title}</h2>
            <span className="card-date">{moment(recipe.createdAt).format('llll')}</span>
          </div>
          <div className="card-header-controls">
            <div>
              <Link to={`/edit/recipe/${recipe.id}`}>
                <button className="button--nobg">
                  <FontAwesomeIcon 
                      color="#6DB65B"
                      icon="pen" 
                      size="1x"
                  />
                </button>
              </Link>
            </div>
            <div>
            <button 
                  className="button--nobg"
                  onClick={this.openModalHandler}
              >
                <FontAwesomeIcon 
                    color="#6DB65B"
                    icon="trash-alt" 
                    size="1x"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="card-body">
          <button 
              className="button--primary button--block"
              onClick={this.openRecipeModal}
          >
            View Recipe
          </button>
        </div>
      </div>
    );
  }
}

RecipeItem.propTypes = {
  recipe: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

export default withRouter(connect(undefined, mapDispatchToProps)(RecipeItem));

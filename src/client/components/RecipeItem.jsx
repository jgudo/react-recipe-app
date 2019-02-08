import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import { deleteRecipe } from '../store/actions/recipes';
import Modal from './Modal';

const RecipeItem = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onDeleteHandler = () => {
    props.deleteRecipe(props.recipe.id);
    props.history.push('/');
  };

  const openModalHandler = () => {
    setIsVisible(true);
  };

  const closeModalHandler = () => {
    setIsVisible(false);
  };

  return (
    <React.Fragment>
      <Modal
      className="modal"
      show={isVisible}
      close={closeModalHandler}
    >
      <h2>Sure to delete?</h2>
      <button 
        className="button--red"
        onClick={onDeleteHandler}
      >
        Delete
      </button>      
    </Modal>
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          <h1 className="card-title">{props.recipe.title}</h1>
          <span class="card-date">{moment(props.recipe.createdAt).format('llll')}</span>
        </div>
        <div className="card-header-controls">
          <Link to={`/edit/recipe/${props.recipe.id}`}>
            <button
              className="button--nobg"
            >
              Edit
            </button>
          </Link>
          <button 
            className="button--nobg"
            onClick={openModalHandler}
          >
            delete
          </button>
        </div>
      </div>
      <div className="card-body">
        <p>{props.recipe.description}</p>
        <p>{props.recipe.recipes}</p>
      </div>
    </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

export default connect(undefined, mapDispatchToProps)(withRouter(RecipeItem));

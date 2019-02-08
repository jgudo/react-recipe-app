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
    <div>
      <Modal
        className="modal"
        show={isVisible}
        close={closeModalHandler}
      >
        <h2>Sure to delete?</h2>
        <button onClick={onDeleteHandler}>Delete</button>      
      </Modal>
      <div>
        <Link to={`/edit/recipe/${props.recipe.id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={openModalHandler}>delete</button>
      </div>
      <h1>{props.recipe.title}</h1>
      <span>{moment(props.recipe.createdAt).format('llll')}</span>
      <p>{props.recipe.description}</p>
      <p>{props.recipe.recipes}</p>
  </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

export default connect(undefined, mapDispatchToProps)(withRouter(RecipeItem));

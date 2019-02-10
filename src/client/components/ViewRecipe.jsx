import React, { useState } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import Modal from './Modal';
import Navigation from './Navigation';
import { deleteRecipe, deleteAllRecipe } from '../store/actions/recipes';

export const ViewRecipe = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDeleteAllModal, setIsVisibleDeleteAll] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');
  
  const handleKey = (data) => {
    setSelectedKey(data);
  };

  const onDelete = () => {
    props.deleteRecipe(selectedKey);
    setIsVisible(false);
    props.history.push('/');
  };

  const onDeleteAll = () => {
    props.deleteAllRecipe();
    setIsVisibleDeleteAll(false);
    props.history.push('/');
  };

  const openModalHandler = () => {
    setIsVisible(true);
  };

  const openModalHandlerDeleteAll = () => {
    setIsVisibleDeleteAll(true);
  };

  const closeModalHandler = () => {
    setIsVisible(false);
  };

  const closeModalHandlerDeleteAll = () => {
    setIsVisibleDeleteAll(false);
  };

  return (
    <div>
      <div className="navigation">
        <Navigation modalOpen={openModalHandlerDeleteAll} />
      </div>
      <Modal
          className="modal"
          show={isVisible}
          close={closeModalHandler}
      >
        <h2>Sure to delete?</h2>
        <button 
            className="button--red"
            onClick={onDelete}
        >
          Delete
        </button>      
      </Modal>
      <Modal
          className="modal"
          show={isVisibleDeleteAllModal}
          close={closeModalHandlerDeleteAll}
      >
        <h2>Sure to delete all recipes?</h2>
        <button 
            className="button--red"
            onClick={onDeleteAll}
        >
          Delete All
        </button>      
      </Modal>
      <span 
        className="card-subtitle"
        style={{
          position: 'relative',
          top: '15px'
        }}
      >Delicious</span>
      <h1>{props.recipe.title}</h1>
      <div className="view-card">
        <div className="card-wrapper">
          <RecipeItem 
              handleKey={handleKey}
              modalOpen={openModalHandler}
              /*eslint-disable*/
              onRef={ref => (child = ref)}
              /* eslint-enable */
              recipe={props.recipe}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    recipe: state.find(recipe => recipe.id === props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id)),
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipe);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import Modal from './Modal';
import { deleteRecipe } from '../store/actions/recipes';

export const ViewRecipe = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');
 
  const handleKey = (data) => {
    setSelectedKey(data);
  };

  const onDelete = () => {
    props.deleteRecipe(selectedKey);
    setIsVisible(false);
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
        <button 
            className="button--red"
            onClick={onDelete}
        >
          Delete
        </button>      
      </Modal>
      <RecipeItem 
          handleKey={handleKey}
          modalOpen={openModalHandler}
          /*eslint-disable*/
          onRef={ref => (child = ref)}
          /* eslint-enable */
          recipe={props.recipe}/>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    recipe: state.find(recipe => recipe.id === props.match.params.id)
  };
};

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewRecipe);

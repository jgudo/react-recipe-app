import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteAllRecipe } from '../store/actions/recipes';
import RecipeList from './RecipeList';

const Navigation = (props) => {
  const handleDeleteAll = () => {
    props.modalOpen();
  };

  return (
    <div className="navigation-wrapper">
      <div className="navigation-controls">
        <Link 
          className="button--link"
          exact="true"
          to="/" 
        >
          <button 
            className="button--primary button--block button--icon"
          >
            <FontAwesomeIcon 
                color="#fff"
                icon="list-ul" 
                size="1x"
            />
            <span>View All My Recipes</span>
          </button>
        </Link>
        <br/>
        <Link 
          className="button--link"
          to="/addrecipe"
        >
          <button 
            className="button--primary button--block button--icon"
          >
            <FontAwesomeIcon 
                color="#fff"
                icon="plus" 
                size="1x"
            />
            <span>Add New Recipe</span>
          </button>
        </Link>
        <br/>
        <button 
            className="button--primary button--block button--icon"
            onClick={handleDeleteAll}
          >
            <FontAwesomeIcon 
                color="#fff"
                icon="trash-alt" 
                size="1x"
            />
            <span>Delete All Recipes</span>
          </button>
      </div>
      <RecipeList />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(undefined, mapDispatchToProps)(Navigation);

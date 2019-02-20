import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteAllRecipe } from '../store/actions/recipes';
import RecipeList from './RecipeList';

const Navigation = (props) => {
  const [isOpenNavigation, setToggle] = useState(false);
  const [isMobileScreen, setScreen] = useState(false);
  const [navIcon, setNavIcon] = useState('bars');
  const handleDeleteAll = () => {
    props.modalOpen();
  };

  const onDetectScreenHandler = () => {
    if (window.screen.width <= 800) {
      setScreen(true);
    } else {
      setScreen(false);
    }
  };

  useEffect(() => {
    onDetectScreenHandler();
  });

  window.addEventListener('resize', () => {
    onDetectScreenHandler();
  });

  const toggleNavigation = () => {
    setToggle(!isOpenNavigation);
    if (isOpenNavigation) {
      setNavIcon('bars');
    } else {
      setNavIcon('times');
    }
  };

  return (
    <div 
      className="navigation"
      style={{
        left: !isOpenNavigation && isMobileScreen ? '-25rem' : '0'
      }}
    >
      {isMobileScreen && (
        <div className="navigation-toggle">
          <button 
            className="button--toggle"
            onClick={toggleNavigation}
          >
            <FontAwesomeIcon 
                color="#fff"
                icon={navIcon}
                size="1x"
            />
          </button>
        </div>
      )}
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
            <span>View All Recipes</span>
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
  </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default connect(undefined, mapDispatchToProps)(Navigation);

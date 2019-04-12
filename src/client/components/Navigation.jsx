import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RecipeList from './RecipeList';
import Modal from './Modal';

import { deleteAllRecipe } from '../store/actions/recipes';

class Navigation extends Component {
  state = {
    isOpenNavigation: false,
    isOpenModal: false,
    navIcon: 'bars'
  };

  handleDeleteAll = () => {
    this.props.deleteAllRecipe();
    this.props.history.push('/');
    this.setState({ isOpenModal: false });
  };

  openModalHandler = () => {
    this.setState(() => ({ isOpenModal: true }));
  };
  
  closeModalHandler = () => {
    this.setState(() => ({ 
      isOpenModal: false
    }));
  };


  toggleNavigation = () => {
    this.setState({ isOpenNavigation: !this.state.isOpenNavigation });
    this.nav.classList.toggle('open');

    if (this.state.isOpenNavigation) {
      this.setState({ navIcon: 'bars' });
    } else {
      this.setState({ navIcon: 'times' });
    }
  };

  render() {
    const { isOpenNavigation, navIcon } = this.state;

    return (
      <div 
          className="navigation"
          /* eslint-disable no-return-assign */
          ref={el => this.nav = el}
      >
        <Modal
            isOpenModal={this.state.isOpenModal}
            closeModal={this.closeModalHandler}
        >
          <h2>Sure to delete all recipes?</h2>
          <button 
              className="button--delete"
              onClick={this.handleDeleteAll}
          >
            Yes, Delete All
          </button>      
        </Modal>
        <div className="navigation-wrapper">
          <div className="navigation-logo">
            <Link to="/">
              <h1>Crecipe</h1>
            </Link>
          </div>
          <div className="navigation-controls">
            <Link 
                className="button--link"
                exact="true"
                onClick={this.toggleNavigation}
                to="/" 
            >
              <button 
                className="button--view button--icon"
              >
                <span>View All Recipes</span>
                <FontAwesomeIcon 
                    color="#fff"
                    icon="list-ul" 
                    size="1x"
                />
              </button>
            </Link>
            <br/>
            <Link 
                className="button--link"
                onClick={this.toggleNavigation}
                to="/addrecipe"
            >
              <button 
                  className="button--add button--icon"
              >
                <span>Add New Recipe</span>
                <FontAwesomeIcon 
                    color="#fff"
                    icon="plus" 
                    size="1x"
                />
              </button>
            </Link>
            <br/>
            <button 
                className="button--delete button--icon"
                onClick={this.openModalHandler}
              >
                <span>Delete All Recipes</span>
                <FontAwesomeIcon 
                    color="#fff"
                    icon="trash-alt" 
                    size="1x"
                />
              </button>
          </div>
          {/* <RecipeList /> */}
        </div>
        <div className="navigation-toggle">
          <button onClick={this.toggleNavigation}>
            <FontAwesomeIcon 
                color="#fff"
                icon={navIcon}
                size="1x"
            />
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteAllRecipe: () => dispatch(deleteAllRecipe())
});

export default withRouter(connect(undefined, mapDispatchToProps)(Navigation));

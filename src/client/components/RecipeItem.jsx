import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteRecipe } from '../store/actions/recipes';

export class RecipeItem extends Component {
  componentDidMount() {
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  onDeleteHandler() {
    this.props.deleteRecipe(this.props.recipe.id);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">
            <span>
                <FontAwesomeIcon 
                color="#6DB65B"
                icon="utensils" 
                size="2x"
            />
            </span>
            <h1 className="card-title">{this.props.recipe.title}</h1>
            <span className="card-date">{moment(this.props.recipe.createdAt).format('llll')}</span>
          </div>
          <div className="card-header-controls">
            <Link to={`/edit/recipe/${this.props.recipe.id}`}>
              <button
                className="button--nobg"
              >
                Edit
              </button>
            </Link>
            <button 
                className="button--nobg"
                onClick={this.props.modalOpen}
            >
              delete
            </button>
          </div>
        </div>
        <div className="card-body">
          <p>{this.props.recipe.description}</p>
          <p>{this.props.recipe.recipes}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

export default connect(undefined, mapDispatchToProps)(withRouter(RecipeItem));

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteRecipe } from '../store/actions/recipes';

const RecipeItem = (props) => {
  const onDeleteHandler = () => {
    props.deleteRecipe(props.recipe.id);
    props.history.push('/');
  };

  return (
    <div>
      <div>
        <Link to={`/edit/recipe/${props.recipe.id}`} >
          <button>Edit</button>
        </Link>
        <button onClick={onDeleteHandler}>delete</button>
      </div>
      <h1>{props.recipe.title}</h1>
      <p>{props.recipe.description}</p>
      <p>{props.recipe.recipes}</p>
  </div>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteRecipe: id => dispatch(deleteRecipe(id))
});

export default connect(undefined, mapDispatchToProps)(RecipeItem);

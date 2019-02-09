import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RecipeItem = (props) => {
  const onDeleteHandler = () => {
    props.handleKey(props.recipe.id);
    props.modalOpen();
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          <h2 className="card-title">{props.recipe.title}</h2>
          <span className="card-date">{moment(props.recipe.createdAt).format('llll')}</span>
        </div>
        <div className="card-header-controls">
          <Link to={`/edit/recipe/${props.recipe.id}`}>
            <button className="button--nobg">
              <FontAwesomeIcon 
                  color="#6DB65B"
                  icon="pen" 
                  size="1x"
              />
            </button>
          </Link>
            <button 
                className="button--nobg"
                onClick={onDeleteHandler}
            >
              <FontAwesomeIcon 
                  color="#6DB65B"
                  icon="trash-alt" 
                  size="1x"
              />
            </button>
        </div>
      </div>
      <div className="card-image">
        <img src={props.recipe.image} alt={props.recipe.title}/>
      </div>
      <div className="card-body">
        {props.recipe.description ? (
          <React.Fragment>
            <span className="card-subtitle">Description:</span>
            <p>{props.recipe.description}</p>
            <br/>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="card-subtitle">No description</span>
            <br/>
          </React.Fragment>
        )}
        {props.recipe.recipes ? (
          <React.Fragment>
            <span className="card-subtitle">Recipe:</span>
            <textarea
              className="card-recipe-preview"
              rows="5"
              readOnly
            >
              {props.recipe.recipes}
            </textarea>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="card-subtitle">No recipe written yet</span>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default RecipeItem;

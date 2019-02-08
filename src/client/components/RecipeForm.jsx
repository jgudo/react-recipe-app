import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';

export default class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.recipe ? props.recipe.title : '',
      description: props.recipe ? props.recipe.description : '',
      recipes: props.recipe ? props.recipe.recipes : '',
      createdAt: 0,
      id: '',
      error: undefined
    };
  }
  
  onSubmitHandler = (e) => {
    e.preventDefault();
    if (this.state.title === '') {
      this.setState(() => ({ error: 'Title is required' }));
    } else {
      this.setState(() => ({ error: undefined }));
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        recipes: this.state.recipes,
        createdAt: moment().valueOf(),
        id: uuid()
      });
    }
    console.log('Submitted');
  };

  onTitleChange = (e) => {
    const input = e.target.value;
    this.setState(() => ({
      title: input
    }));
  };

  onDescriptionChange = (e) => {
    const input = e.target.value;
    this.setState(() => ({
      description: input
    }));
  };

  onRecipeChange = (e) => {
    const input = e.target.value;
    this.setState(() => ({
      recipes: input
    }));
  };

  render() {
    return (
      <div>
        <form 
          className="recipe-form"
          onSubmit={this.onSubmitHandler}
        >
          <br/>
          {this.state.error && <span className="error-message">* Title is required</span>}
          <div className="form-control">
            <input 
                onChange={this.onTitleChange}
                placeholder="Title"
                type="text" 
                value={this.state.title}
            />
          </div>
          <div className="form-control">
            <input 
                onChange={this.onDescriptionChange}
                placeholder="Description"
                type="text" 
                value={this.state.description}
            />
          </div>
          <div className="form-control">
            <textarea
                onChange={this.onRecipeChange} 
                placeholder="List of Recipe"
                rows="8"
                value={this.state.recipes}
            />
          </div>
          <div className="form-control">
            <button>
              Save Recipe
            </button>
          </div>
        </form>
      </div>
    );
  }
}

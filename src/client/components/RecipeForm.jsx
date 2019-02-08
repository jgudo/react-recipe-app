import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';

export default class RecipeForm extends Component {
  state = {
    title: '',
    description: '',
    recipes: '',
    createdAt: 0,
    id: '',
    error: undefined
  };

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
        <form onSubmit={this.onSubmitHandler}>
          {this.state.error && <p>Title is required</p>}
          <input 
              onChange={this.onTitleChange}
              placeholder="Title"
              type="text" 
              value={this.state.title}
          />
          <input 
              onChange={this.onDescriptionChange}
              placeholder="Description"
              type="text" 
              value={this.state.description}
          />
          <textarea
              onChange={this.onRecipeChange} 
              placeholder="List of Recipe"
              value={this.state.recipes}
          />
          <button>
            Add Recipe
          </button>
        </form>
      </div>
    );
  }
}

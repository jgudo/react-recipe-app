import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextareaLine from '../helpers/textarealine';
import foodBg from '../assets/images/food.jpg';

class RecipeForm extends Component {
  state = {
    title: this.props.recipe ? this.props.recipe.title : '',
    description: this.props.recipe ? this.props.recipe.description : '',
    recipes: this.props.recipe ? this.props.recipe.recipes : '',
    createdAt: 0,
    image: this.props.recipe ? this.props.recipe.image : '',
    id: this.props.recipe ? this.props.recipe.id : '',
    error: undefined
  };

  componentDidMount() {
    TextareaLine.append_line_numbers(this.textarea.id);
  }
  
  onSubmitHandler = (e) => {
    e.preventDefault();

    if (this.state.title === '') {
      this.setState({ error: 'Title is required' });
    } else {
      this.setState({ error: undefined });
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        recipes: this.state.recipes,
        createdAt: moment().valueOf(),
        image: this.state.image,
        id: this.state.id ? this.state.id : uuid()
      });
    }
  };

  onTitleChange = (e) => {
    const input = e.target.value;
    this.setState({ title: input });
  };

  onDescriptionChange = (e) => {
    const input = e.target.value;
    this.setState({ description: input });
  };

  onRecipeChange = (e) => {
    const input = e.target.value;
    this.setState({ recipes: input });
  };

  onFileChange = (e) => {
    const fileType = e.target.files[0].type;
    if (fileType === 'image/jpeg' || fileType === 'image/png') {
      const reader = new FileReader(); 
      reader.addEventListener('load', () => { 
        this.setState({ image: reader.result });
      });

      reader.readAsDataURL(e.target.files[0]);
    } else {
      alert('file type must be JPEG or PNG');
    }
  };

  render() {
    const { 
      error, 
      title, 
      description,
      recipes,
      image
    } = this.state;
    return (
      <div>
        <form 
            className="recipe-form"
            onSubmit={this.onSubmitHandler}
        >
          <div className="form-input">
            <br/>
            {error && <span className="error-message">* Title is required</span>}
            <div className="form-control">
              <input 
                  onChange={this.onTitleChange}
                  placeholder="Title"
                  type="text" 
                  value={title}
              />
            </div>
            <div className="form-control">
              <input 
                  onChange={this.onDescriptionChange}
                  placeholder="Description"
                  type="text" 
                  value={description}
              />
            </div>
            <div className="form-control">
              <div className="textarea-wrapper">
                <textarea
                    className="textarea-add"
                    id="textarea-add"
                    onChange={this.onRecipeChange} 
                    placeholder="List of Recipe"
                    /* eslint-disable no-return-assign */
                    ref={el => this.textarea = el}
                    rows={recipes.split(/\r\n|\r|\n/).length}
                    value={recipes}
                />
              </div>
            </div>
            <div className="form-control">
              <button className="button--primary button--icon">
                <span>Save Recipe</span>  
                <FontAwesomeIcon 
                    color="#fff"
                    icon="save" 
                    size="1x"
                />
              </button>
            </div>
          </div>
          <div className="form-thumbnail">
            <img src={image ? image : foodBg} alt=""/>
            <div className="form-file-chooser">
              <label 
                  className="button--block file-label"
                  htmlFor="file"
              >
                Choose Thumbnail
              </label>
              <input
                  className="input-file"
                  id="file"
                  onChange={this.onFileChange}
                  type="file"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RecipeForm;

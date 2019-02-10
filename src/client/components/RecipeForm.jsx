import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TLN from '../helpers/textarealine';

export default class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.recipe ? props.recipe.title : '',
      description: props.recipe ? props.recipe.description : '',
      recipes: props.recipe ? props.recipe.recipes : '',
      createdAt: 0,
      image: props.recipe ? props.recipe.image : '',
      id: props.recipe ? props.recipe.id : '',
      error: undefined
    };

    this.textarea = React.createRef();
  }

  componentDidMount() {
    console.log(this.textarea);
    TLN.append_line_numbers(this.textarea.current.id);
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
        image: this.state.image,
        id: this.state.id ? this.state.id : uuid()
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

  onFileChange = (e) => {
    const fileType = e.target.files[0].type;
    if (fileType === 'image/jpeg' || fileType === 'image/png') {
      const reader = new FileReader(); 
      reader.addEventListener('load', () => { 
        this.setState(() => ({ image: reader.result }));
      });

      reader.readAsDataURL(e.target.files[0]);
    } else {
      /* eslinst-disable */
      alert('file type must be JPEG or PNG');
      /* eslinst-enable */
    }
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
            <div className="form-file-chooser">
              <label 
                className="file-label"
                htmlFor="file"
              >
                Choose Thumbnail
              </label>
              {this.state.image ? (
                <img src={this.state.image} alt=""/>
              ) : (
                <span className="card-subtitle">No image selected</span>
              )}
            </div>
            <input
                className="input-file"
                id="file"
                onChange={this.onFileChange}
                type="file"
            />
          </div>
          <div className="form-control">
            <div className="textarea-wrapper">
              <textarea
                  className="textarea-add"
                  ref={this.textarea}
                  id="textarea-add"
                  rows={this.state.recipes.split(/\r\n|\r|\n/).length}
                  onChange={this.onRecipeChange} 
                  placeholder="List of Recipe"
                  value={this.state.recipes}
              />
            </div>
          </div>
          <div className="form-control">
            <button
              className="button--primary button--icon"
            >
              <FontAwesomeIcon 
                  color="#fff"
                  icon="save" 
                  size="1x"
              />
              <span>Save Recipe</span>  
            </button>
          </div>
        </form>
      </div>
    );
  }
}

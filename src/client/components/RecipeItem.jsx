import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class RecipeItem extends React.Component {
  state = {
    isCollapsed: true,
    collapseHeight: 'auto',
    icon: 'angle-up'
  };

  componentDidMount() {
    console.log(this.collapseBody);
    const height = this.collapseBody.clientHeight;
    this.setState(() => ({ collapseHeight: height }));
  }

  onCollapseHandle = () => {
    this.setState(prevState => ({ 
      isCollapsed: !prevState.isCollapsed,
      icon: prevState.isCollapsed ? 'angle-down' : 'angle-up' 
    }));
  };

  onDeleteHandler = () => {
    this.props.handleKey(this.props.recipe.id, this.props.recipe.title);
    this.props.modalOpen();
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-header-title">
            <h2 className="card-title">{this.props.recipe.title}</h2>
            <span className="card-date">{moment(this.props.recipe.createdAt).format('llll')}</span>
          </div>
          <div className="card-header-controls">
            <Link to={`/edit/recipe/${this.props.recipe.id}`}>
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
                  onClick={this.onDeleteHandler}
              >
                <FontAwesomeIcon 
                    color="#6DB65B"
                    icon="trash-alt" 
                    size="1x"
                />
              </button>
          </div>
        </div>
        {this.props.recipe.image && (
          <div className="card-image">
            <img src={this.props.recipe.image} alt={this.props.recipe.title}/>
          </div>
        )}
        <div className="card-body">
          {this.props.recipe.description ? (
            <React.Fragment>
              <span className="card-subtitle">Description:</span>
              <p>{this.props.recipe.description}</p>
              <br/>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span className="card-subtitle">No description</span>
              <br/>
            </React.Fragment>
          )}
          
          <div className="collapse">
            <div 
              className="collapse-header"
              onClick={this.onCollapseHandle}
            >
              <h3>{this.state.isCollapsed ? 'Hide Recipe' : 'Show Recipe'}</h3>
              <span>
                <FontAwesomeIcon 
                      color="#14393F"
                      icon={this.state.icon} 
                      size="1x"
                  />
              </span>
            </div>
            <div 
              className="collapse-body"
              /* eslint-disable */
              ref={el => this.collapseBody = el}
              /* eslint-enable */
              style={{
                height: this.state.isCollapsed ? `${this.state.collapseHeight}px` : '0px',
                visibility: this.state.isCollapsed ? 'visible' : 'hidden'
              }}
            >
              {this.props.recipe.recipes ? ( 
                <React.Fragment>
                  <span className="card-subtitle">Recipe:</span>
                  <textarea
                    className="card-recipe-preview"
                    id="textarea-preview"
                    rows={this.props.recipe.recipes.split(/\r\n|\r|\n/).length}
                    readOnly
                    value={this.props.recipe.recipes}
                  />
                </React.Fragment>
              ) : (
                <span className="card-subtitle">No recipe written yet</span>
              )}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeItem;

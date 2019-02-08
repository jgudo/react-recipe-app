const recipeListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE': 
      return [...state, action.recipe];
    case 'DELETE_RECIPE':
      return state.filter(recipe => recipe.id !== action.id);
    case 'EDIT_RECIPE':
      return state.map((recipe) => {
        if (recipe.id === action.id) {
          return {
            ...recipe,
            ...action.updates
          };
        }
        return recipe;
      });
    default: 
      return state;  
  }
};

export default recipeListReducer;

export const addNewRecipe = recipe => ({
  type: 'ADD_RECIPE',
  recipe
});

export const deleteRecipe = id => ({
  type: 'DELETE_RECIPE',
  id
});

export const editRecipe = (id, updates) => ({
  type: 'EDIT_RECIPE',
  id,
  updates
});

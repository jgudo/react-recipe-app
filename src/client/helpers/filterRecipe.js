// import moment from 'moment';

/* eslint-disable  */
const filterRecipe = (recipes, filter) => {
  if (recipes) {
    return recipes.filter((recipe) => {
      return recipe.title.toLowerCase().includes(filter.title.toLowerCase());
    }).sort(() => {
      if (filter.sortBy === 'date') {
        if (filter.order === 'ascending') return 1;
        if (filter.order === 'descending') return -1;
      } 
      if (filter.sortBy === 'title') {
        if (filter.order === 'ascending') return 1;
        if (filter.order === 'descending') return -1;
      }
    });
  }
};

export default filterRecipe;

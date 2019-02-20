const recipeFilterReducer = (state = {
  title: '',
  sortBy: 'date',
  order: 'ascending' 
}, action) => {
  switch (action.type) {
    case 'FILTER_TITLE':
      return {
        ...state,
        title: action.title
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_TITLE': 
      return {
        ...state,
        sortBy: 'title'
      };
    case 'ORDER_ASCENDING': 
      return {
        ...state,
        order: 'ascending'
      };    
    case 'ORDER_DESCENDING': 
      return {
        ...state,
        order: 'descending'
      };    
    default: 
      return state;
  }
};

export default recipeFilterReducer;

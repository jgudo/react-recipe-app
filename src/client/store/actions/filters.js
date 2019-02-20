export const setTitleFilter = (title = '') => ({
  type: 'FILTER_TITLE',
  title
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByTitle = () => ({
  type: 'SORT_BY_TITLE'
});

export const orderAscending = () => ({
  type: 'ORDER_ASCENDING'
});

export const orderDescending = () => ({
  type: 'ORDER_DESCENDING'
});

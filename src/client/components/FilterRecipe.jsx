import React from 'react';
import { connect } from 'react-redux';
import { 
  setTitleFilter, 
  sortByDate, 
  sortByTitle,
  orderAscending,
  orderDescending 
} from '../store/actions/filters';

const FilterRecipe = (props) => {
  const onChangeHandler = (e) => {
    props.setTitleFilter(e.target.value);
  };

  const onSortChange = (e) => {
    const selected = e.target.value;
    if (selected === 'date') props.sortByDate();
    if (selected === 'title') props.sortByTitle();
  };

  const onOrderChange = (e) => {
    const order = e.target.value;
    if (order === 'ascending') props.orderAscending();
    if (order === 'descending') props.orderDescending();
  };
  
  return (
    <div className="filter__recipe">
      <input
          onChange={onChangeHandler}
          placeholder="Search for recipe"
          type="text"
          value={props.filter.title}
      />
      <select 
        name="sort" 
        id="sort"
        onChange={onSortChange}
      >
        <option value="date">Sort By Date</option>
        <option value="title">Sort By Title</option>
      </select>
      <select 
        name="order" 
        id="order"
        onChange={onOrderChange}
      >
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  setTitleFilter: title => dispatch(setTitleFilter(title)),
  sortByDate: () => dispatch(sortByDate()),
  sortByTitle: () => dispatch(sortByTitle()),
  orderAscending: () => dispatch(orderAscending()),
  orderDescending: () => dispatch(orderDescending())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterRecipe);

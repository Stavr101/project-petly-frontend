import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filters/filterSelector';
import { setFilter } from 'redux/filters/filtersSlice';
import style from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };
  return (
    <div className={style.FilterContainer}>
      <label htmlFor="filter">
        Find contacts by name
        <input
          className={style.FilterInput}
          type="text"
          name="filter"
          onChange={handleChange}
          value={filter}
        />
      </label>
    </div>
  );
};

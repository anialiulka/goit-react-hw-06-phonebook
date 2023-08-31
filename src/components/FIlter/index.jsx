import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ handleChange, filter }) => {
  return (
    <label htmlFor="filter" className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        required
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

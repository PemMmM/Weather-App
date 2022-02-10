/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React from "react";
// import PropTypes from "prop-types";

function SearchForm({ searchText, setSearchText, onSubmit }) {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <span className="search-form">
      <input type="text" onChange={handleInputChange} value={searchText} />
      <button type="submit" onClick={onSubmit} data-testid="searchbutton">
        Search
      </button>
    </span>
  );
}

// SearchForm.propTypes = {
//   searchText: PropTypes.string.isRequired,
//   setSearchText: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// };
export default SearchForm;

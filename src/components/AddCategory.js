import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputValue = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const findDuplicate = (elements) => elements.includes(inputValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((elements) => {
        if (!findDuplicate(elements)) {
          return [inputValue, ...elements];
        }
        return elements;
      });
    }
  };
  return (
    <>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => onInputValue(event)}
        />
      </form>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;

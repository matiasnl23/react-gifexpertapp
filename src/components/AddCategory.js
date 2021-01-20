import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim().length) return;

    setCategories((curr) => [inputValue, ...curr]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Buscando {inputValue}</h1>
      <input onChange={handleInputChange} type="text" value={inputValue} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

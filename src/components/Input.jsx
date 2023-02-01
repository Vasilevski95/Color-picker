import React from "react";
import colorNames from "colornames";

const Input = ({ colorName, setColorName, setHexValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Add color name..."
        value={colorName}
        onChange={(e) => {
          setColorName(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </form>
  );
};

export default Input;

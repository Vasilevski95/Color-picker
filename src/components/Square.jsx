import React from "react";

const Square = ({ colorName, hexValue }) => {
  let textColor = null;

  if (colorName === "black") {
    textColor = "#fff";
  } else {
    textColor = "#000";
  }

  return (
    <section style={{ backgroundColor: colorName }} className="square">
      <p style={{ color: textColor }}>
        {colorName
          ? colorName
          : "After you pass in the color, background will change and you will receive a hex code of a color"}
      </p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

export default Square;

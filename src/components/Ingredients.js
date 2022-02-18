import React from "react";
import "../styles/Ingredients.css";

const Ingredients = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <tr className="ingredient-list">
        <th className="ingredient-text">{ingredient.text}</th>
      </tr>
    );
  });
};

export default Ingredients;

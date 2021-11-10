import React from "react";
import "./Card.css";
function RecipeItem({ recipe }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{recipe.owner.name}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{recipe.name}</h5>
          <div className="card-date">{recipe.createdAt}</div>
        </div>
      </div>
      <img className="card-image" src={recipe.image} alt="Logo" />
      <div className="card-text">{recipe.slug}</div>
      <div className="card-like-bar">
        <div className="like-text">
          <b>4</b> nawaf.
        </div>
      </div>
    </div>
  );
}

export default RecipeItem;

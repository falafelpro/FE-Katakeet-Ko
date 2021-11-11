import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function RecipeItem({ recipe }) {
  return (
    <div className="card m-2 border">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{recipe.owner?.name}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{recipe.name}</h5>
          {/* <div className="card-date">{recipe.createdAt}</div> */}
        </div>
      </div>
      <Link to={`/${recipe.slug}`}>
        <img className="card-image" src={recipe.image} alt="Logo" />
      </Link>
      <div className="card-text">{recipe.slug}</div>
      {/* <div className="card-like-bar">
        <div className="like-text">like-text</div>
      </div> */}
    </div>
  );
}

export default RecipeItem;

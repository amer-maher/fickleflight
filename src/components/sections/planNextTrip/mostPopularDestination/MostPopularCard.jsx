import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "./mostPopularCard.css";

function MostPopularCard({ name, price, backimg }) {
  return (
    <div className="card most-popular-card">
      
      <div className="card-img-overlay d-flex flex-column justify-content-end">
        <h3 className="card-title text-white name">{name}</h3>

       
        <p className="card-text text-white price">FROM ${price}</p>
      </div>

      
      <img className="card-img" src={backimg} alt={name} />
    </div>
  );
}

export default MostPopularCard;

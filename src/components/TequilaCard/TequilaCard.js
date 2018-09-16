import React from "react";
import "./TequilaCard.css";

const TequilaCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.removeTequila(props.id)} className="remove" />
    </div>
  </div>
);

export default TequilaCard;

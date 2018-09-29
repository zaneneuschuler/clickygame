import React from "react";

const Card = props => (
  <div className="col-3">
    <div className="card"
    onClick={() => props.onClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default Card;

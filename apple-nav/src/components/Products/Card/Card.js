import React from "react";

const Card = props => {
  return (
    <div className={`product ${props.data.name}`}>
      <img src={`${props.data.img}`} alt={`${props.data.name}`} />
      <p>{props.data.name}</p>
    </div>
  );
};

export default Card;

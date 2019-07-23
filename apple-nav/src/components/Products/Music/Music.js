import React from "react";

import Card from "../Card/Card";

const Music = props => {
  const { appleData } = props;
  const listOfMusic = appleData[5].subLinks;

  return (
    <div className="product-container container">
      {listOfMusic.map((music, index) => {
        return <Card key={index} data={music} />;
      })}
    </div>
  );
};

export default Music;

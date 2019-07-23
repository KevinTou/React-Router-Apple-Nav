import React from "react";

import Card from "../Card/Card";

const Watch = props => {
  const { appleData } = props;
  const listOfWatchs = appleData[3].subLinks;

  return (
    <div className="product-container container">
      {listOfWatchs.map((watch, index) => {
        return <Card key={index} data={watch} />;
      })}
    </div>
  );
};

export default Watch;

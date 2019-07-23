import React from "react";

import Card from "../Card/Card";

const TV = props => {
  const { appleData } = props;
  const listOfTVs = appleData[4].subLinks;

  return (
    <div className="product-container container">
      {listOfTVs.map((tv, index) => {
        return <Card key={index} data={tv} />;
      })}
    </div>
  );
};

export default TV;

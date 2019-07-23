import React from "react";

import Card from "../Card/Card";

const Mac = props => {
  const { appleData } = props;
  const listOfMacs = appleData[0].subLinks;

  return (
    <div className="product-container container">
      {listOfMacs.map((mac, index) => {
        return <Card key={index} data={mac} />;
      })}
    </div>
  );
};

export default Mac;

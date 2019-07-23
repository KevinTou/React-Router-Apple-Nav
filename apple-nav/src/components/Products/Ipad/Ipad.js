import React from "react";

import Card from "../Card/Card";

const Ipad = props => {
  const { appleData } = props;
  const listOfIpads = appleData[1].subLinks;

  return (
    <div className="product-container container">
      {listOfIpads.map((ipad, index) => {
        return <Card key={index} data={ipad} />;
      })}
    </div>
  );
};

export default Ipad;

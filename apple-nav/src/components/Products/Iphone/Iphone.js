import React from "react";

import Card from "../Card/Card";

const Iphone = props => {
  const { appleData } = props;
  const listOfIphones = appleData[2].subLinks;

  return (
    <div className="product-container container">
      {listOfIphones.map((iphone, index) => {
        return <Card key={index} data={iphone} />;
      })}
    </div>
  );
};

export default Iphone;

import React from "react";

const CategoryRight = () => {
  return (
    <div className="d-flex bg-danger align-items-around" style={{ height: "100vh" }}>
      <div className="p-2 border">Flex item 1</div>
      <div className="p-2 border  align-self-between">
      <div>Flex item 2</div>
      <div>Flex item 2</div>
      
      </div>
      <div className="p-2 border">Flex item 3</div>
    </div>
  );
};

export default CategoryRight;

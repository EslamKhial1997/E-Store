import React from "react";

const CategoryRight = () => {
  return (
    <div className="d-flex bg-danger" style={{ height: "100vh" }}>
      <div className="p-2 border">Flex item 1</div>
      <div className="p-2 border align-self-start h-100">
      <div className="p-2 border align-self-start">Flex item 2</div>
      <div className="p-2 border align-self-end">Flex item 2</div>
        </div>
        
      <div className="p-2 border">Flex item 3</div>
    </div>
  );
};

export default CategoryRight;

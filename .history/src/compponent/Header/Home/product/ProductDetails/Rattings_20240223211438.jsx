import React from "react";
import img from "../../../img/cat-1.jpg";
import Rating from '@mui/material/Rating';
const Rattings = () => {
    const [value, setValue] = React.useState(2);
  return (
    <div className="container">
      <h3>Point of view</h3>
      <div className="border rounded" style={{
        backgroundColor: "#072541",
        color: "#FFFFFF",
      }}>
        <div className="m-3 bg-light rounded">
          <div className="text-dark d-flex justify-content-between align-items-center">
            <div className="pt-2 px-2"><img src={img} alt="Img" className="border" style={{width:"70px" , height:"70px", borderRadius:"50%"}}/>
            <strong className="mx-2">Eslam</strong>
            </div>
            <div className="d-flex justify-content-between align-items-center">
           <small>(3R)</small> <Rating name="read-only" value={value} readOnly className="px-3"/>
            </div>
          </div>
          <div className="mt-2 p-2 text-secondary">
            lorem-ipsum.paragraph : The term 'lorem-ipsum.paragraph' is not
            recognized as the name of a cmdlet, function, script file, or
            operable program. Check the spelling of the name, or if a path was
          </div>
        </div>
     
    <div>
    <input type="text" className="" placeholder="What Your Mind"/>
    <button
              className="btn text-light col-3"
              style={{ backgroundColor: "#072541", cursor: "pointer" }}
            >
              Commint
            </button>
    </div>
      </div>
    </div>
  );
};

export default Rattings;

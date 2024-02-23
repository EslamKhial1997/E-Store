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
            <div><img src={img} alt="Img" style={{width:"50px" , height:"50px", borderRadius:"50%"}}/>
            <strong className="mx-2">Eslam</strong>
            </div>
            <div className="d-flex">
           <small>(3R)</small> <Rating name="read-only" value={value} readOnly className="px-3"/>
            </div>
          </div>
          <div className="mt-2 p-2 text-secondary">
            lorem-ipsum.paragraph : The term 'lorem-ipsum.paragraph' is not
            recognized as the name of a cmdlet, function, script file, or
            operable program. Check the spelling of the name, or if a path was
          </div>
        </div>
        <div className="p-3">
          <div>
            <img src={img} alt="Img" style={{width:"50px" , height:"50px", borderRadius:"50%"}}/>
            <strong className="mx-2">Eslam</strong>
          </div>
          <div className="mt-2">
            lorem-ipsum.paragraph : The term 'lorem-ipsum.paragraph' is not
            recognized as the name of a cmdlet, function, script file, or
            operable program. Check the spelling of the name, or if a path was
          </div>
        </div>
        <div className="p-3">
          <div>
            <img src={img} alt="Img" style={{width:"50px" , height:"50px", borderRadius:"50%"}}/>
            <strong className="mx-2">Eslam</strong>
          </div>
          <div className="mt-2">
            lorem-ipsum.paragraph : The term 'lorem-ipsum.paragraph' is not
            recognized as the name of a cmdlet, function, script file, or
            operable program. Check the spelling of the name, or if a path was
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rattings;

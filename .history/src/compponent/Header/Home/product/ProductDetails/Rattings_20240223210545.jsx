import React from "react";
import img from "../../../img/cat-1.jpg";
const Rattings = () => {
  return (
    <div className="container">
      <h3>Point of view</h3>
      <div className="border rounded" style={{
        backgroundColor: "#072541",
        color: "#FFFFFF",
      }}>
        <div className="m-3">
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

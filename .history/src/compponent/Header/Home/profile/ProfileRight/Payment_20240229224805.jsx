import React from "react";

const Payment = () => {
  return (
    <div className="table-responsive">
      {" "}
      <table className="table">
        <thead>
          <tr className="d-flex">
            <th scope="col-">#</th>
            <th scope="col-">First</th>
            <th scope="col-">Last</th>
            <th scope="col-">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <div className="d-flex">
              {" "}
              <td className="col-12">Mark</td>
              <td className="col-12">Otto</td>
              <td className="col-12">@mdo</td>
             
            </div>
          </tr>
          
        
        </tbody>
      </table>
    </div>
  );
};

export default Payment;

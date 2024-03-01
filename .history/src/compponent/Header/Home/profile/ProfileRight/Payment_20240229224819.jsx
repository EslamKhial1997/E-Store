import React from "react";

const Payment = () => {
  return (
    <div className="table-responsive">
      {" "}
      <table className="table">
        <thead>
          <tr className="d-flex">
            <th scope="col-6">#</th>
            <th scope="col-6">First</th>
            <th scope="col-6">Last</th>
            <th scope="col-6">Handle</th>
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

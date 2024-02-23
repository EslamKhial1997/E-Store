import React from 'react'

const CategoriesNavBar = () => {
  return (
    <div className=" d-flex justify-content-around align-items-center flex-wrap">
    <div className="col-12 rounded p-3" style={{ backgroundColor: "#072541" }}>
      <div className="d-flex justify-content-between flex-wrap align-items-center">
        <div className="col-lg-3 col-12 d-flex justify-content-between border rounded p">
          <input
            type="text"
            placeholder="Search"
            className="border w-100 rounded p-1"
          />
          <button
            className="btn  text-light"
            style={{ backgroundColor: "#072541" }}
          >
            Search
          </button>
        </div>
        <div className="col-lg-8 col-12 d-flex align-items-center justify-content-lg-end justify-content-between">
          <small className="text-secondary mx-2 d-lg-block d-none">
            Category 1500 Result
          </small>
          <div className="col-lg-3 col-12">
            {" "}
            <select
              className="form-select "
              aria-label="Default select example"
            >
              <option selected>Filter Items </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default CategoriesNavBar

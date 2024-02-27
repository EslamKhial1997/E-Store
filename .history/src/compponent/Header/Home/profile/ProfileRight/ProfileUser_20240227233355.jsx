import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const ProfileUser = () => {
  return (
    <div className='container'>
      <h2>Profile Information</h2>
      <div>
      <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-6">
    <label htmlFor="inputAddress2" className="form-label">Phone</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">Gender</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
  <div className="col-md-3">
  
    <label htmlFor="inputZip" className="form-label">Birthday</label>
    <div className="form-control">
    </div>
    <LocalizationProvider dateAdapter={AdapterDayjs} >
    <DatePicker />
  </LocalizationProvider>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Update Profile</button>
  </div>
</form>
      
      </div>
    </div>
  )
}

export default ProfileUser

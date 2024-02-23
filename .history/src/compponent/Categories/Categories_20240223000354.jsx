import React from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'
import NavbarOne from '../Header/Home/Navbar/NavbarOne'
import NavbarTwo from '../Header/Home/Navbar/NavbarTwo'

const Categories = () => {
  return (
    <div>
    
    </div>
    <div className='container-fluid d-flex justify-content-around'>
    <NavbarOne/>
    <NavbarTwo/>
      <div className='col-2'>
      <CategoryLeft/>
      </div>
      <div className='col-9'>
      <CategoryRight/>
      </div>
    </div>
  )
}

export default Categories
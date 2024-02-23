import React from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'
import NavbarOne from '../Header/Home/Navbar/NavbarOne'
import NavbarTwo from '../Header/Home/Navbar/NavbarTwo'

const Categories = () => {
  return (
    <div>
    <NavbarOne/>
    <NavbarTwo/>
    <Hei />
    <ParentSection />
    <Brands />
    <div className='container-fluid d-flex justify-content-around'>
      <div className='col-2'>
      <CategoryLeft/>
      </div>
      <div className='col-9'>
      <CategoryRight/>
      </div>
    </div>
    </div>
    
  )
}

export default Categories

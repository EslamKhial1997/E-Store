import React from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'
import NavbarOne from '../Header/Home/Navbar/NavbarOne'
import NavbarTwo from '../Header/Home/Navbar/NavbarTwo'
import HeighSale from '../Header/Home/heighSale/HeighSale'
import ParentSection from '../body/ParentSection'
import Brands from '../Header/Home/brands/Brands'

const Categories = () => {
  return (
    <div>
    <NavbarOne/>
    <NavbarTwo/>
    <HeighSale />
  
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

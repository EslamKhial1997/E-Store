import React from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'

const Categories = () => {
  return (
    <div className='d-flex'>
      <div className='col-3'>
      <CategoryLeft/>
      </div>
      <div className='col-'>
      <CategoryRight/>
      </div>
    </div>
  )
}

export default Categories

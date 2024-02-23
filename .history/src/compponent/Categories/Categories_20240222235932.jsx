import React from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'

const Categories = () => {
  return (
    <div className='d-flex'>
      <div className='col-2'>
      <CategoryLeft/>
      </div>
      <div className='col-8'>
      <CategoryRight/>
      </div>
    </div>
  )
}

export default Categories

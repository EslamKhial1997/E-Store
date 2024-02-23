import React from 'react'
import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'

const Categories = () => {
  return (
    <div className='d-flex'>
      <div>
      <CategoryLeft/>
      </div>
      <div>
      <CategoryRight/>
      </div>
    </div>
  )
}

export default Categories

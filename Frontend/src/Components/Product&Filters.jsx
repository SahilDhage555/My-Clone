import React from 'react'
import Filters from './Filters'
import Products from './Products'

export default function productFilters() {
  return (
    <div className='px-2'>
      <h1 className='text-2xl font-semibold text-gray-800 m-4'>Products For You</h1>
      <div className='flex'>
        <div className='flex '>
          <Filters />
          <Products />
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}


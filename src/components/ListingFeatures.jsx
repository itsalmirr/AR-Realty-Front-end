import React from 'react'
import { IoMdPricetag } from 'react-icons/io'
import { MdSquareFoot } from 'react-icons/md'
import { FaBed, FaBath, FaRegHeart, FaPlus, FaMinus } from 'react-icons/fa'

const ListingFeatures = ({ listing, perSqft }) => {
  // calculate the price per sqare foot

  return (
    <div className='border-t divide-y'>
      <ul className='flex space-x-3 lg:mt-2 lg:mb-2'>
        <li>
          <p className='border-r flex text-gray-900 font-light text-sm items-center p-3 group'>
            <MdSquareFoot className='w-4 h-4 text-gray-300' />
            <span className='ml-2 mr-1 whitespace-nowrap'>
              {listing.sqft} ft<sup>2</sup>
            </span>
          </p>
        </li>
        <li>
          <p className='border-r flex text-gray-900 font-light text-sm items-center p-3 group'>
            <MdSquareFoot className='w-4 h-4 text-gray-300' />
            <span className='ml-2 mr-1 whitespace-nowrap'>
              {perSqft} per ft<sup>2</sup>
            </span>
          </p>
        </li>
        <li>
          <p className='border-r flex text-gray-900 font-light text-sm items-center p-3 group'>
            <FaBed className='w-4 h-4 text-gray-300' />
            <span className='ml-2 mr-1 whitespace-nowrap'>
              {listing.bedrooms}
            </span>
            Bed
          </p>
        </li>
        <li>
          <p className='flex text-gray-900 font-light text-sm items-center p-3 group'>
            <FaBath className='w-4 h-4 text-gray-300' />
            <span className='ml-2 mr-1 whitespace-nowrap'>
              {listing.bathrooms}
            </span>
            Bath
          </p>
        </li>
      </ul>
    </div>
  )
}

export default ListingFeatures

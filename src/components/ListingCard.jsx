import { IoMdPricetag } from 'react-icons/io'
import { MdSquareFoot } from 'react-icons/md'
import { FaBed, FaBath, FaRegHeart } from 'react-icons/fa'

import { formatPrice } from '@lib/index'

const ListingCard = ({ listing }) => {
  const price = formatPrice(listing.price)
  return (
    <ul role='list'>
      <li
        key={listing.id}
        data-aos='fade-up'
        className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
        <div className='flex-1 flex flex-col'>
          <img
            className=' flex-shrink-0 mx-auto rounded-t-lg'
            src={listing.photo_main}
            alt={listing.description}
          />
          <h3 className='mt-2 mb-2 text-gray-900 text-lg font-medium'>
            {listing.title}
          </h3>
          <div className='relative'>
            <div
              className='absolute inset-0 flex items-center'
              aria-hidden='true'>
              <div className='w-full border-t border-gray-300' />
            </div>
          </div>
          <div className='flex justify-between'>
            <h3 className='flex justify-start items-center mx-2 mt-3'>
              <IoMdPricetag className='w-4 h-4 mr-2 text-gray-300' />
              <span className='text-gray-900 font-bold'>{price}</span>
            </h3>
            <button className='flex justify-start items-center mx-2 mt-3'>
              <FaRegHeart className='w-5 h-5 mr-2 text-gray-300 hover:text-red-400' />
            </button>
          </div>

          <ul className='flex space-x-3 lg:mt-2'>
            <li>
              <p className='flex text-gray-900 font-light text-sm items-center p-3 group'>
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
                Bed
              </p>
            </li>
            <li>
              <p className='flex text-gray-900 font-light text-sm items-center p-3 group'>
                <MdSquareFoot className='w-4 h-4 text-gray-300' />
                <span className='ml-2 mr-1 whitespace-nowrap'>
                  {listing.sqft} ft<sup>2</sup>
                </span>
              </p>
            </li>
          </ul>
          <p className='text-gray-500 font-light text-sm p-2 break-normal justify text-justify'>
            {`${listing.description.slice(0, 100)}...`}
          </p>
        </div>
        <button className='w-full h-10 mt-5 bg-primaryDark rounded-md text-white hover:bg-primaryLight'>
          More Info
        </button>
      </li>
    </ul>
  )
}

export default ListingCard

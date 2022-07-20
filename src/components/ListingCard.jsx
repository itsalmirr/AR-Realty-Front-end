import Link from 'next/link'
import Image from 'next/image'
import { IoMdPricetag } from 'react-icons/io'
import { FaRegHeart, FaBed, FaBath } from 'react-icons/fa'
import { MdSquareFoot } from 'react-icons/md'

import { formatPrice } from '@lib/helpers'

const ListingCard = ({ listing }) => {
  return (
    <ul role='list'>
      <li
        key={listing.id}
        data-aos='fade-up'
        className='col-span-1 flex my-8 flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
        <div className='flex-1 flex flex-col'>
          <Link href={`/listings/${listing.slug}`}>
            <a href='#'>
              <Image
                width={357.32}
                height={238.28}
                className='flex-shrink-0 cursor-pointer mx-auto rounded-t-lg'
                src={listing.photo_main}
                alt={listing.description}
              />
            </a>
          </Link>
          <a className='mt-2 mb-2 text-gray-900 text-lg cursor-pointer font-bold hover:underline'>
            {listing.title}
          </a>
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
              <span className='text-gray-900 font-bold'>
                {formatPrice(listing.price)}
              </span>
            </h3>
            <button className='flex justify-start items-center mx-2 mt-3'>
              <FaRegHeart className='w-5 h-5 mr-2 text-gray-300 hover:text-red-500' />
            </button>
          </div>
          <div className='border-b'>
            {/* <ListingFeatures listing={listing} /> */}
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
                  <FaBed className='w-4 h-4 tesxt-gray-300' />
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

          <p className='text-gray-500 font-light text-sm p-2 break-normal justify text-justify'>
            {`${listing.description.slice(0, 100)}...`}
          </p>
        </div>
        <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
          <div className='mt-6 flex items-center'>
            <div className='flex-shrink-0'>
              <a href='#'>
                <span className='sr-only'>{listing.realtor.full_name}</span>
                <Image
                  width={40}
                  height={40}
                  className='h-10 w-10 rounded-full'
                  src={listing.realtor.photo}
                  alt=''
                />
              </a>
            </div>
            <div className='ml-3'>
              <p className='flex space-x-1 text-sm font-medium text-gray-900'>
                <a href='#' className='hover:underline'>
                  {listing.realtor.full_name}
                </a>
              </p>
              <div className='flex space-x-1 text-sm text-gray-500'>
                <time dateTime={listing.pub_date}>{listing.publishedAt}</time>
                <span aria-hidden='true'>&middot;</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default ListingCard

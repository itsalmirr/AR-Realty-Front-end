import { FaPhone } from 'react-icons/fa'
import { MdEmail, MdDelete } from 'react-icons/md'

import { formatPrice } from '@lib/helpers'
import { MvpStar, Verified } from '@common/components/app/Marks'
import Link from 'next/link'

export const RequestedInquiriesCard = ({ inquiries }) => {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
    >
      {inquiries.map((inquiry) => (
        <li
          key={inquiry.id}
          className='col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'
        >
          <div className='w-full flex items-center justify-between p-6 space-x-6'>
            <div className='flex-1 truncate'>
              <div className='flex items-center space-x-1'>
                <h3 className='text-gray-900 text-sm font-medium truncate'>
                  {inquiry.realtor.full_name}
                </h3>
                <Verified />
                {inquiry.realtor.is_mvp && <MvpStar />}
              </div>
              <Link href={`/listings/${inquiry.slug}`}>
                <div className='flex items-center space-x-3'>
                  <p className='mt-1 text-gray-500 text-sm truncate underline underline-offset-1 cursor-pointer hover:text-accentDark'>
                    {inquiry.address} - {inquiry.city}, {inquiry.state}
                  </p>
                  <span className='flex-shrink-0 inline-block px-2 py-0.5 text-purple-800 text-xs font-medium bg-purple-100 rounded-full'>
                    {'Listing'}
                  </span>
                </div>
              </Link>
              <p className='mt-1 text-primaryDark text-sm truncate'>
                {formatPrice(inquiry.price)}
              </p>
            </div>
            <Link href={`/listings/${inquiry.slug}`} className='cursor-pointer'>
              <img
                className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
                src={inquiry.photo_main}
                alt=''
              />
            </Link>
          </div>
          <div>
            <div className='-mt-px flex divide-x divide-gray-200'>
              <div className='w-0 flex-1 flex'>
                <a
                  href={`mailto:${inquiry.realtor.email}`}
                  className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-primaryDark'
                >
                  <MdEmail
                    className='w-5 h-5 text-primaryDark'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>Email</span>
                </a>
              </div>
              <div className='-ml-px w-0 flex-1 flex'>
                <a
                  href={`tel:${inquiry.realtor.phone}`}
                  className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-green-400'
                >
                  <FaPhone
                    className='w-5 h-5 text-green-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>Call</span>
                </a>
              </div>
              <div className='w-0 flex-1 flex'>
                <button className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-red-400'>
                  <MdDelete
                    className='w-5 h-5 text-red-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>Remove</span>
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default RequestedInquiriesCard

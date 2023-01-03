import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'
import { MdEmail, MdDelete } from 'react-icons/md'
import { useState, useEffect, Fragment } from 'react'

import { formatPrice } from '@lib/helpers'
import { delInquiry } from '@components/app/Forms/lib'
import { fetchUserInquiries } from '@common/queries/listings'
import { MvpStar, Verified } from '@common/components/app/Marks'

export const RequestedInquiriesCard = ({ links }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [userInquiries, setUserInquiries] = useState([])
  const { data } = useSWR('/api/auth/dashboard', fetchUserInquiries)

  useEffect(() => {
    if (data) {
      setUserInquiries(data.resData)
    }
    setIsLoading(false)
  }, [data])

  return (
    <Fragment>
      {userInquiries.length > 0 && !isLoading && (
        <ul
          role='list'
          className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {userInquiries.map((inquiry) => (
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
                <Link
                  href={`/listings/${inquiry.slug}`}
                  className='cursor-pointer'
                >
                  <Image
                    className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
                    width={40}
                    height={40}
                    src={inquiry.photo_main}
                    alt={inquiry.address + ' photo'}
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
                    <button
                      onClick={() =>
                        delInquiry(inquiry.id, setUserInquiries, userInquiries)
                      }
                      className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-red-400'
                    >
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
      )}
      {userInquiries.length === 0 && !isLoading && (
        <div className='flex flex-col items-center justify-center mt-12'>
          <p className='text-center text-gray-500 text-sm'>
            You have no inquiries.
          </p>
          <p className='text-center text-gray-500 text-sm'>
            You can browse our listings and request an inquiry.
          </p>

          <Link href={links.listings}>
            <button className='mt-4 bg-primaryDark hover:bg-accentDark text-white font-bold py-2 px-4 rounded'>
              Browse Listings
            </button>
          </Link>
        </div>
      )}
    </Fragment>
  )
}

export default RequestedInquiriesCard

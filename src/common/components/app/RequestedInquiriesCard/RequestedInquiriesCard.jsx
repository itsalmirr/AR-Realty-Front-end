import useSWR from 'swr'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import { formatPrice } from '@lib/helpers'
import Link from 'next/link'

export const RequestedInquiriesCard = ({
  listings,
  setIsLoading,
  setListings,
}) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data)

  const { data, error } = useSWR('/api/auth/dashboard', fetcher)

  useEffect(() => {
    data === undefined ? setIsLoading(true) : setListings(data.resData)
    if (error !== undefined) {
      setIsLoading(false)
      toast.error('Something went wrong. Please try refreshing the page.')
    }

    data && data.resData && setIsLoading(false)
  }, [data])

  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'
    >
      {listings.map((listing) => (
        <li
          key={listing.id}
          className='col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'
        >
          <div className='w-full flex items-center justify-between p-6 space-x-6'>
            <div className='flex-1 truncate'>
              <div className='flex items-center space-x-3'>
                <h3 className='text-gray-900 text-sm font-medium truncate'>
                  {listing.realtor.full_name}
                </h3>
                <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                  {'Realtor'}
                </span>
              </div>
              <Link href={`/listings/${listing.slug}`}>
                <div className='flex items-center space-x-3'>
                  <p className='mt-1 text-gray-500 text-sm truncate underline underline-offset-1 cursor-pointer hover:text-accentDark'>
                    {listing.address} - {listing.city}, {listing.state}
                  </p>
                  <span className='flex-shrink-0 inline-block px-2 py-0.5 text-purple-800 text-xs font-medium bg-purple-100 rounded-full'>
                    {'Listing'}
                  </span>
                </div>
              </Link>
              <p className='mt-1 text-primaryDark text-sm truncate'>
                {formatPrice(listing.price)}
              </p>
            </div>
            <img
              className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
              src={listing.realtor.photo}
              alt=''
            />
          </div>
          <div>
            <div className='-mt-px flex divide-x divide-gray-200'>
              <div className='w-0 flex-1 flex'>
                <a
                  href={`mailto:${listing.realtor.email}`}
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
                  href={`tel:${listing.realtor.phone}`}
                  className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-primaryDark'
                >
                  <FaPhone
                    className='w-5 h-5 text-primaryDark'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default RequestedInquiriesCard

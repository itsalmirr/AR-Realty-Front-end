import useSWR from 'swr'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import { MdPool } from 'react-icons/md'
import { GrLocationPin } from 'react-icons/gr'
import { GiTennisCourt, GiGardeningShears } from 'react-icons/gi'
import { useEffect, useContext, useState, Fragment } from 'react'

import ImageSwiper from '@hooks/ImageSwiper'
import AuthContext from '@context/AuthContext'
import { isInquiryMade } from '@common/queries/fetchlistings'
import { Divider } from '@components/app/Divider'
import { InquiryForm } from '@components/app/Forms'
import { formatPrice, classNames } from '@lib/helpers'
import { ListingPageDetails } from '@components/app/ListingPageDetails'
import { RealtorDescription } from '@components/app/RealtorDescription'

const ListingPage = ({ slug, currentListing }) => {
  const [fullDescription, setFullDescription] = useState(false)
  const [listing, setListing] = useState(currentListing)
  const [inquiryMade, setInquiryMade] = useState(false)
  const { user: authUser } = useContext(AuthContext)

  const { data, error } = useSWR(
    `/api/inquiries?id=${currentListing.id}`,
    isInquiryMade
  )

  useEffect(() => {
    setListing(currentListing)
    data && setInquiryMade(data.resData === 'true' && true)
  }, [slug, authUser, data])
  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl'>
      <div className=' lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
        {/* Image gallery */}
        <Tab.Group as='div' className='flex flex-col-reverse'>
          <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
            <ImageSwiper listing={listing} />
          </Tab.Panels>
        </Tab.Group>

        {/* Listing info */}
        <div className='mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0'>
          <h1 className='text-3xl font-extralight tracking-tight text-gray-900'>
            {listing.title}
          </h1>

          <div className='mt-3'>
            <h2 className='sr-only'>Listing information</h2>
            <p className='text-3xl font-extrabold text-gray-900'>
              {formatPrice(listing.price)}
            </p>
          </div>
          <section aria-labelledby='details-heading' className='mt-12'>
            <h2 id='details-heading' className='sr-only'>
              Additional details
            </h2>
            <div className='relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'>
              <div className='flex items-center'>
                <span
                  className={classNames(
                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                  )}
                >
                  <GrLocationPin className='h-6 w-6' aria-hidden='true' />
                </span>
                <address className='ml-4 text-gray-900 font-bold'>
                  {listing.address}, {listing.city}, {listing.state},{' '}
                  {listing.zipcode}
                </address>
              </div>
              {listing.pool && (
                <div className='flex items-center'>
                  <span
                    className={classNames(
                      'rounded-lg inline-flex p-3 ring-4 ring-white'
                    )}
                  >
                    <MdPool className='h-6 w-6' aria-hidden='true' />
                  </span>
                  <span className='ml-4 text-gray-900 font-bold'>
                    Pool 10 x 20
                  </span>
                </div>
              )}
              <div className='flex items-center'>
                <span
                  className={classNames(
                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                  )}
                >
                  <GiTennisCourt className='h-6 w-6' aria-hidden='true' />
                </span>
                <span className='ml-4 text-gray-900 font-bold'>
                  Tennis court
                </span>
              </div>
              <div className='flex items-center'>
                <span
                  className={classNames(
                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                  )}
                >
                  <GiGardeningShears className='h-6 w-6' aria-hidden='true' />
                </span>
                <span className='ml-4 text-gray-900 font-bold'>Garden</span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Divider text={'About the Listing'} />
      {/* Details such as cooling, heating, built year etc...  */}
      <ListingPageDetails listing={listing} classNames={classNames} />
      <div>
        <span className='inline-flex items-center px-2.5 py-2.5 rounded-md text-xs bg-gray-300 text-black font-bold'>
          DESCRIPTION
        </span>
        <p className='mt-6 text-sm font-medium text-gray-600 max-w-lg'>
          {fullDescription
            ? listing.description
            : `${listing.description.slice(0, 200)}...`}
        </p>
        <br />
        <button
          onClick={() => setFullDescription(!fullDescription)}
          className='text-sm border p-1 font-semibold text-primaryDark hover:bg-gray-200'
        >
          {fullDescription ? 'HIDE FULL DESCRIPTION' : 'READ FULL DESCRIPTION'}
        </button>
      </div>
      <div className='bg-white lg:py-24 my-12'>
        <RealtorDescription listing={listing} />
      </div>
      {authUser && !inquiryMade && (
        <Fragment>
          <Divider text={'Make an inquiry'} />
          <InquiryForm listing={listing} user={authUser} />
        </Fragment>
      )}
      {inquiryMade && (
        <div className='bg-white my-12'>
          <main className='sm:flex'>
            <img
              src='https://res.cloudinary.com/iamalmiir/image/upload/v1667350951/undraw_awesome_rlvy_hfbadt.svg'
              className='h-1/5 w-1/5'
            />
            <div className='sm:ml-6 lg:mt-18'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                  Inquiry sent!
                </h1>
                <p className='mt-1 text-base text-gray-500'>
                  We will get back to you as soon as possible.
                </p>
              </div>
              <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
                <Link
                  href='/listings'
                  className='inline-flex items-center rounded-md border border-transparent bg-primaryDark px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryLight'
                >
                  Browse more listings
                </Link>
                <Link
                  href='/account/dashboard'
                  className='inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-primaryDark hover:bg-gray-300'
                >
                  Go to your dashboard
                </Link>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}

export default ListingPage

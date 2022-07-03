import dynamic from 'next/dynamic'
import { useEffect, useContext, useState } from 'react'
import { Tab } from '@headlessui/react'
import { MdPool } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BsInfoLg } from 'react-icons/bs'
import { GiTennisCourt, GiGardeningShears } from 'react-icons/gi'

import { formatPrice, formatPhoneNumber, classNames } from '@lib/helpers'
import ListingsContext from '@context/ListingsContext'
import { Divider, ListingFeatures, ListingOverview } from '@components/index'
const ImageSwiper = dynamic(() => import('@components/ImageSwiper'))
const Layout = dynamic(() => import('@components/Layout'))

const ListingById = ({ slug }) => {
  const [fullDescription, setFullDescription] = useState(false)
  const { loading, listing, fetchListingBySlug } = useContext(ListingsContext)

  useEffect(() => {
    console.log('fired!')
    !loading && fetchListingBySlug(slug)
  }, [slug])

  return (
    <Layout title={listing.title}>
      {listing.heating && (
        <div className='bg-white'>
          <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl'>
            {/* Give first column more width */}
            <div className=' lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
              {/* Image gallery */}
              <Tab.Group as='div' className='flex flex-col-reverse'>
                <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
                  <ImageSwiper listing={listing} />
                </Tab.Panels>
              </Tab.Group>

              {/* Product info */}
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
                  <div className='border-t divide-y'>
                    <ListingFeatures
                      listing={listing}
                      perSqft={formatPrice(listing.price / listing.sqft)}
                      show={true}
                    />
                  </div>
                  <div className='relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'>
                    <div className='flex items-center'>
                      <span
                        className={classNames(
                          'rounded-lg inline-flex p-3 ring-4 ring-white'
                        )}>
                        <MdPool className='h-6 w-6' aria-hidden='true' />
                      </span>
                      <span className='ml-4 text-gray-900 font-bold'>
                        Pool 10 x 20
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <span
                        className={classNames(
                          'rounded-lg inline-flex p-3 ring-4 ring-white'
                        )}>
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
                        )}>
                        <GiGardeningShears
                          className='h-6 w-6'
                          aria-hidden='true'
                        />
                      </span>
                      <span className='ml-4 text-gray-900 font-bold'>
                        Garden
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <Divider text={'About the Listing'} />
            <ListingOverview listing={listing} classNames={classNames} />

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
                className='text-sm border p-1 font-semibold text-primaryDark hover:bg-gray-200'>
                {fullDescription
                  ? 'HIDE FULL DESCRIPTION'
                  : 'READ FULL DESCRIPTION'}
              </button>
            </div>
            <div className='bg-white lg:py-24'>
              <div className='pb-16 bg-primaryDark lg:pb-0 lg:z-10 lg:relative'>
                <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8'>
                  <div className='relative lg:-my-8'>
                    <div
                      aria-hidden='true'
                      className='absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden'
                    />
                    <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full'>
                      <div className='aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full'>
                        <img
                          className='object-cover lg:h-full lg:w-full'
                          src={listing.realtor.photo}
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                  <div className='mt-12 lg:m-0 lg:col-span-2 lg:pl-8'>
                    <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none'>
                      <blockquote>
                        <div>
                          <BsInfoLg className='h-12 w-12 text-white opacity-25' />
                          <p className='mt-6 text-lg font-medium text-white'>
                            {listing.realtor.description}
                          </p>
                        </div>
                        <footer className='mt-6'>
                          <p className='text-base font-medium text-white'>
                            {listing.realtor.full_name} |{' '}
                            <em className='text-accentDark'>Realtor</em>
                          </p>
                          <br />
                          <div className='flex'>
                            <div className='flex-shrink-0'>
                              <FaPhone
                                className='h-6 w-6 text-gray-200'
                                aria-hidden='true'
                              />
                            </div>
                            <div className='ml-3 text-base text-gray-300'>
                              <p>
                                +1 {formatPhoneNumber(listing.realtor.phone)}
                              </p>
                              <p className='mt-1'>Mon-Fri 8am to 6pm PST</p>
                            </div>
                          </div>
                          <br />
                          <div className='flex'>
                            <div className='flex-shrink-0'>
                              <FiMail
                                className='h-6 w-6 text-gray-200'
                                aria-hidden='true'
                              />
                            </div>
                            <div className='ml-3 text-base text-gray-300'>
                              <p>{listing.realtor.email}</p>
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default ListingById

export const getServerSideProps = (ctx) => {
  const { slug } = ctx.params

  return {
    props: {
      slug,
    },
  }
}

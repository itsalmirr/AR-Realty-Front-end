import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'
import { Tab } from '@headlessui/react'
import { MdPool } from 'react-icons/md'
import { FaQuoteLeft } from 'react-icons/fa'
import { GiTennisCourt, GiGardeningShears } from 'react-icons/gi'

import { companyLogo } from '@lib/constants'
import { formatPrice, classNames } from '@lib/helpers'
import ListingsContext from '@context/ListingsContext'
import {
  Layout,
  Divider,
  ListingFeatures,
  ListingOverview,
} from '@components/index'
const ImageSwiper = dynamic(() => import('@components/ImageSwiper'))

const ListingById = () => {
  const router = useRouter()
  const { slug } = router.query
  const { loading, listing, singleListing } = useContext(ListingsContext)

  useEffect(() => {
    !loading && singleListing(slug)
  }, [listing])

  const price = formatPrice(listing.price)
  const pricePerSqft = formatPrice(listing.price / listing.sqft)

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
                    {price}
                  </p>
                </div>
                <section aria-labelledby='details-heading' className='mt-12'>
                  <h2 id='details-heading' className='sr-only'>
                    Additional details
                  </h2>
                  <div className='border-t divide-y'>
                    <ListingFeatures
                      listing={listing}
                      perSqft={pricePerSqft}
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
            <Divider text={'About the House'} />
            <ListingOverview listing={listing} classNames={classNames} />

            <blockquote className='relative bg-white rounded-lg shadow-lg'>
              <div className='rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8'>
                <img
                  src={companyLogo}
                  alt='Workcation'
                  className='h-8 bg-primaryDark rounded-md'
                />
                <Divider text={'About the House'} />
              </div>
            </blockquote>
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
                          <FaQuoteLeft className='h-12 w-12 text-white opacity-25' />
                          <p className='mt-6 text-xl font-medium text-white'>
                            {listing.realtor.description}
                          </p>
                        </div>
                        <footer className='mt-6'>
                          <p className='text-base font-medium text-white'>
                            {listing.realtor.full_name}
                          </p>
                          <email className='text-base font-medium text-white'>
                            {listing.realtor.email}
                          </email>
                          <p className='text-base font-medium text-white'>
                            {listing.realtor.phone}
                          </p>
                          <br />
                          <p className='text-base font-medium text-blue-100'>
                            REALTOR at AR Realty
                          </p>
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
  return {
    props: {
      query: ctx.query.slug,
    },
  }
}

import { useRouter } from 'next/router'
import { useEffect, useContext, useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Disclosure, Tab } from '@headlessui/react'
import { formatPrice } from '@lib/helpers'
import {
  FaPlus,
  FaMinus,
  FaRegBuilding,
  FaCalendar,
  FaTemperatureHigh,
  FaSnowflake,
  FaParking,
} from 'react-icons/fa'

import { RiLandscapeFill } from 'react-icons/ri'
import { GiHomeGarage, GiTennisCourt, GiGardeningShears } from 'react-icons/gi'
import { MdPriceCheck, MdPool } from 'react-icons/md'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

import { Layout, Divider, ListingFeatures, Spinner } from '@components/index'
import { companyLogo } from '@lib/constants'
import ListingsContext from '@context/ListingsContext'

const ListingById = () => {
  const router = useRouter()
  const { slug } = router.query
  console.log(slug)
  const { loading, listing, singleListing } = useContext(ListingsContext)

  useEffect(() => {
    !loading && singleListing(slug)
  }, [listing])

  const photos = [
    listing.photo_main,
    listing.photo_1,
    listing.photo_2,
    listing.photo_3,
    listing.photo_4,
    listing.photo_5,
  ]

  const price = formatPrice(listing.price)
  const pricePerSqft = formatPrice(listing.price / listing.sqft)
  const listingOverview = [
    {
      title: 'Property Type',
      value: `${listing.type_of_property} residence`,
      icon: FaRegBuilding,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-gray-50',
    },
    {
      title: 'Built in',
      value: `Built in ${listing.year_built}`,
      icon: FaCalendar,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
    },
    {
      title: 'Heat',
      value: `${listing.heating}`,
      icon: FaTemperatureHigh,
      iconForeground: 'text-red-700',
      iconBackground: 'bg-red-50',
    },
    {
      title: 'Cooling',
      value: `${listing.cooling}`,
      icon: FaSnowflake,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
    },
    {
      title: 'Land',
      value: `${listing.lot_size} Acres`,
      icon: RiLandscapeFill,
      iconForeground: 'text-green-700',
      iconBackground: 'bg-green-50',
    },
    {
      title: 'Garage / Parking',
      value: listing.garage,
      icon: FaParking,
      iconForeground: 'text-blue-700',
      iconBackground: 'bg-blue-50',
    },
  ]

  return (
    <Layout title={listing.title}>
      {listing.heating && (
        <div className='bg-white'>
          <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl'>
            {/* Give first column more width */}
            <div className=' lg:grid lg:grid-cols-2 lg:gap-x-2 lg:items-start'>
              {/* Image gallery */}
              <Tab.Group as='div' className='flex flex-col-reverse'>
                <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
                  <Swiper
                    pagination={{
                      type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='select-none w-full rounded-lg aspect-sq'>
                    {photos.map(
                      (photo, index) =>
                        photo && (
                          <SwiperSlide key={index}>
                            <img src={photo !== null && photo} alt='' />
                          </SwiperSlide>
                        )
                    )}
                  </Swiper>
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
            <div className='rounded-lg mb-12 bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
              {listingOverview.map((action, actionIdx) => (
                <div
                  key={action.title}
                  className={classNames(
                    actionIdx === 0
                      ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                      : '',
                    actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                    actionIdx === listingOverview.length - 2
                      ? 'sm:rounded-bl-lg'
                      : '',
                    actionIdx === listingOverview.length - 1
                      ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                      : '',
                    'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                  )}>
                  <div className='flex items-center'>
                    <span
                      className={classNames(
                        action.iconBackground,
                        action.iconForeground,
                        'rounded-lg inline-flex p-3 ring-4 ring-white'
                      )}>
                      <action.icon className='h-6 w-6' aria-hidden='true' />
                    </span>
                    <span className='ml-4 text-gray-900 font-bold'>
                      {action.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <blockquote className='relative bg-white rounded-lg shadow-lg'>
              <div className='rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8'>
                <img
                  src={companyLogo}
                  alt='Workcation'
                  className='h-8 bg-primaryDark rounded-md'
                />
                <div className='relative text-lg text-gray-700 font-medium mt-8'>
                  <svg
                    className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200'
                    fill='currentColor'
                    viewBox='0 0 32 32'
                    aria-hidden='true'>
                    <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                  </svg>
                  <p className='ml-5 relative'>{listing.description}</p>
                </div>
              </div>
              <cite className='relative flex items-center sm:items-start bg-primaryDark rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10'>
                <span className='relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2'>
                  <img
                    className='w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300'
                    src={listing.realtor && listing.realtor.photo}
                    alt=''
                  />
                </span>
                <span className='relative ml-4 text-accentDark font-semibold leading-6 sm:ml-24 sm:pl-1'>
                  <span className='text-white font-semibold sm:inline'>
                    {listing.realtor && listing.realtor.full_name}
                  </span>{' '}
                  <span className='sm:inline'>Realtor</span>
                </span>
              </cite>
            </blockquote>
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

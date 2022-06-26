import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'
import { IoMdPricetag } from 'react-icons/io'
import { MdSquareFoot } from 'react-icons/md'
import { FaBed, FaBath, FaRegHeart, FaPlus, FaMinus } from 'react-icons/fa'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { formatPrice } from '@lib/helpers'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper'

import { Layout, Divider, ListingFeatures } from '@components/index'
import ListingsContext from '@context/ListingsContext'

const ListingById = () => {
  const router = useRouter()
  const { slug } = router.query
  const { loading, listing, singleListing } = useContext(ListingsContext)

  useEffect(() => {
    slug && singleListing(slug)
  }, [slug])

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
  return (
    <Layout title='Yes'>
      <div className='bg-white'>
        <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'>
            {/* Image gallery */}
            <Tab.Group as='div' className='flex flex-col-reverse'>
              <Tab.Panels className='w-full aspect-w-1 aspect-h-1'>
                <Swiper
                  pagination={{
                    type: 'progressbar',
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className='select-none'>
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
                <p className='text-3xl font-extrabold text-gray-900'>{price}</p>
              </div>
              <div className='mt-6'>{listing.description}</div>
              <section aria-labelledby='details-heading' className='mt-12'>
                <h2 id='details-heading' className='sr-only'>
                  Additional details
                </h2>
                <ListingFeatures listing={listing} perSqft={pricePerSqft} />

                <div className='border-t divide-y divide-gray-200'>
                  {product.details.map((detail) => (
                    <Disclosure as='div' key={detail.name}>
                      {({ open }) => (
                        <>
                          <h3>
                            <Disclosure.Button className='group relative w-full py-6 flex justify-between items-center text-left'>
                              <span
                                className={classNames(
                                  open ? 'text-indigo-600' : 'text-gray-900',
                                  'text-sm font-medium'
                                )}>
                                {detail.name}
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <FaMinus
                                    className='block h-6 w-6 text-indigo-400 group-hover:text-indigo-500'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <FaPlus
                                    className='block h-6 w-6 text-gray-400 group-hover:text-gray-500'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel
                            as='div'
                            className='pb-6 prose prose-sm'>
                            <ul role='list'>
                              {detail.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
          <Divider text={'About the House'} />
          <div className='flow-root mt-6 max-w-md'>
            <ul role='list' className='-my-5 divide-y divide-gray-200'>
              {announcements.map((announcement) => (
                <li key={announcement.id} className='py-5'>
                  <div className='relative focus-within:ring-2 focus-within:ring-indigo-500'>
                    <h3 className='text-sm font-semibold text-gray-800'>
                      <a
                        href='#'
                        className='hover:underline focus:outline-none'>
                        {/* Extend touch target to entire panel */}
                        <span className='absolute inset-0' aria-hidden='true' />
                        {announcement.title}
                      </a>
                    </h3>
                    <p className='mt-1 text-sm text-gray-600 line-clamp-2'>
                      {announcement.preview}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ListingById

const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    {
      name: 'Washed Black',
      bgColor: 'bg-gray-700',
      selectedColor: 'ring-gray-700',
    },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    {
      name: 'Washed Gray',
      bgColor: 'bg-gray-500',
      selectedColor: 'ring-gray-500',
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Amenities',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const announcements = [
  {
    id: 1,
    title: 'Office closed on July 2nd',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
]

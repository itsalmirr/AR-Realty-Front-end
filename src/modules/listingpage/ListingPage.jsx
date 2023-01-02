import useSWR from 'swr'
import dynamic from 'next/dynamic'
import { Tab } from '@headlessui/react'
import { useEffect, useContext, useState } from 'react'

import AuthContext from '@context/AuthContext'
import { Divider } from '@components/app/Divider'
import { Spinner } from '@components/app/Spinner'
import { classNames } from '@lib/helpers'
// import { FeaturedListings } from '@components/app/FeaturedListings'
import { PropertyDetails } from '@components/app/ListingPageDetails'
import { isInquiryMade } from '@common/queries/listings'
import { RealtorDescription } from '@components/app/RealtorDescription'
import BasicInfo from './BasicInfo'

const ImageSwiper = dynamic(() => import('@hooks/ImageSwiper'), {
  ssr: false,
  loading: () => <Spinner />,
})

const MapBox = dynamic(() => import('@components/app/MapBox/MapBox'), {
  ssr: false,
  loading: () => <Spinner />,
})

const InquiryForm = dynamic(() => import('@components/app/Forms/InquiryForm'), {
  ssr: false,
  loading: () => <Spinner />,
})

const InquiryMade = dynamic(
  () => import('@components/app/InquiryMade/InquiryMade'),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
)
const UserNotSigned = dynamic(
  () => import('@components/app/InquiryMade/UserNotSigned'),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
)

const PropertyDescription = dynamic(() => import('./PropertyDescription'), {
  ssr: false,
  loading: () => <Spinner />,
})

const FeaturedListings = dynamic(
  () => import('@components/app/FeaturedListings/FeaturedListings'),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
)

const ListingPage = ({ slug, currentListing, featuredListings }) => {
  const [listing, setListing] = useState(currentListing)
  const [inquiryMade, setInquiryMade] = useState(false)
  const { user: authUser } = useContext(AuthContext)
  const { data } = useSWR(
    authUser ? `/api/inquiries?id=${currentListing.id}` : null,
    isInquiryMade
  )

  useEffect(() => {
    setListing(currentListing)
    data && setInquiryMade(data.resData === 'true' ? true : false)
  }, [slug, authUser, data])
  console.log('first')

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
        <BasicInfo listing={listing} />
      </div>
      <Divider text={'About the Listing'} />
      {/* Details such as cooling, heating, built year etc...  */}
      <PropertyDetails listing={listing} classNames={classNames} />
      <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
        <PropertyDescription listing={listing} />
        <div className='relative'>
          <MapBox listing={listing} />
        </div>
      </div>
      <div>
        <RealtorDescription listing={listing} />
      </div>
      {authUser && !inquiryMade && (
        <InquiryForm listing={listing} user={authUser} />
      )}
      {!authUser && <UserNotSigned />}
      {inquiryMade && <InquiryMade />}

      {featuredListings && featuredListings.length > 0 && (
        <div>
          <Divider text={'Similar Listings'} />
          <FeaturedListings featuredListings={featuredListings} />
        </div>
      )}
    </div>
  )
}

export default ListingPage

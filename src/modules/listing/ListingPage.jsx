import useSWR from 'swr'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect, useContext, useState, Fragment, memo } from 'react'

import AuthContext from '@context/AuthContext'
import { MapBox } from '@components/app/MapBox'
import { Divider } from '@components/app/Divider'
import { Spinner } from '@components/app/Spinner'
import { isInquiryMade } from '@common/queries/listings'
import { fetchListings } from '@common/queries/listings'
import { PropertyDetails } from '@components/app/PropertyDetails'
import { FeaturedListings } from '@components/app/FeaturedListings'
import { RealtorDescription } from '@components/app/RealtorDescription'
import { BasicInfo, PropertyDescription, ImageGallery } from '@modules/listing'

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

const ListingPage = ({ setTitle }) => {
  const router = useRouter()
  const { slug } = router.query
  const [listing, setListing] = useState(null)
  const [inquiryMade, setInquiryMade] = useState(false)
  const { user: authUser } = useContext(AuthContext)

  const { data: listingData } = useSWR(
    `/api/listings/listing?slug=${slug}`,
    fetchListings
  )

  const { data: inquiryStatus } = useSWR(
    authUser && listing ? `/api/inquiries?id=${listing.id}` : null,
    isInquiryMade
  )

  useEffect(() => {
    if (listingData) {
      setListing(listingData.resData)
    }

    inquiryStatus &&
      setInquiryMade(inquiryStatus.resData === 'true' ? true : false)
  }, [slug, inquiryStatus, listingData])

  return (
    <Fragment>
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl'>
        {listing === null && <Spinner />}
        {listing !== null && (
          <Fragment>
            <div
              onLoad={() => setTitle(listing.title)}
              className='lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start'
            >
              <ImageGallery listing={listing} />
              <BasicInfo listing={listing} />
            </div>
            <Divider text={'About the Listing'} />
            {/* Details such as cooling, heating, built year etc...  */}
            <PropertyDetails listing={listing} />
            <div className='relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8'>
              <PropertyDescription listing={listing} />
              <div className='relative dark:shadow-xl dark:shadow-black'>
                <MapBox listing={listing} />
              </div>
            </div>
            <div>
              <RealtorDescription listing={listing} />
            </div>
          </Fragment>
        )}

        {!authUser && <UserNotSigned />}
        {authUser && !inquiryMade && listing !== null && (
          <InquiryForm
            listing={listing}
            user={authUser}
            setInquiryMade={setInquiryMade}
          />
        )}
        {inquiryMade && <InquiryMade />}

        <div>
          <Divider text={'Similar Listings'} />
          <FeaturedListings />
        </div>
      </div>
    </Fragment>
  )
}

export default memo(ListingPage)

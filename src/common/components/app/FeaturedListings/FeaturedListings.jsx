import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { fetchListings } from '@common/queries/listings'

import { Spinner } from '@components/app/Spinner'
import { ListingCard } from '@components/app/ListingCard'

const ifError = () => (
  <div className='flex flex-col items-center justify-center'>
    <p className='text-2xl text-gray-500'>Error loading listings</p>
  </div>
)

const renderListings = (fl) => (
  <section className='space-y-4 px-2 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'>
    {fl.map((listing) => (
      <ListingCard key={listing.id} listing={listing} />
    ))}
  </section>
)

const FeaturedListings = () => {
  const [featuredListings, setFeaturedListings] = useState([])
  const { data, error } = useSWR(
    '/api/listings/featuredListings/',
    fetchListings,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  useEffect(() => {
    if (data) {
      setFeaturedListings(data.resData.results)
    }
  }, [data])

  return (
    <>
      {error ? ifError() : null}
      {!featuredListings ? (
        <div className='flex flex-col items-center justify-center'>
          <Spinner />
        </div>
      ) : null}
      {featuredListings && renderListings(featuredListings)}
    </>
  )
}

export default FeaturedListings

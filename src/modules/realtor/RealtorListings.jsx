import useSWR from 'swr'
import { useEffect, useState } from 'react'

import { Spinner } from '@components/app/Spinner'
import { ListingCard } from '@components/app/ListingCard'
import { realtorslisting } from '@queries/realtorListings'

const RealtorListings = ({ slug }) => {
  const [listings, setListings] = useState([])

  const { data, error } = useSWR(
    '/api/realtors',
    (url) => realtorslisting(url, slug),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  )

  useEffect(() => {
    data && setListings(data.resData)
  }, [data])

  if (error || !data) {
    return <Spinner />
  }

  return (
    <div>
      {listings.length > 0 && (
        <section className='space-y-4 px-2 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'>
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </section>
      )}
    </div>
  )
}

export default RealtorListings

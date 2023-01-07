import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Spinner } from '@components/app/Spinner'
import { ListingCard } from '@components/app/ListingCard'
import { getRealtorData } from '@common/queries/realtor'

const RealtorListings = () => {
  const router = useRouter()
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const { slug } = router.query

  const { data, error } = useSWR('/api/realtor', (url) =>
    getRealtorData(url, slug)
  )

  useEffect(() => {
    data && setListings(data.resData)
    setLoading(false)
  }, [data, slug])

  if (error || !data || loading) {
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

import useSWR from 'swr'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Spinner } from '@components/app/Spinner'
import { ListingCard } from '@components/app/ListingCard'
import { getRealtorData } from '@common/queries/realtor'

const RealtorListings = () => {
  const router = useRouter()
  const [listings, setListings] = useState(null)
  const [loading, setLoading] = useState(true)

  const { data, error } = useSWR(
    router.query.slug ? '/api/realtor' : null,
    (url) => getRealtorData(url, router.query.slug)
  )

  useEffect(() => {
    if (data) {
      setListings(data.resData)
    }

    setLoading(false)
  }, [router.query.slug, data])

  if (error || !data || loading) {
    return <Spinner />
  }

  return (
    <div>
      {listings && listings.length > 0 && (
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

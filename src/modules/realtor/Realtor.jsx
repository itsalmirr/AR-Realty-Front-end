import useSWR from 'swr'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Layout } from '@components/layouts'
import { Divider } from '@components/app/Divider'
import { Spinner } from '@components/app/Spinner'
import { getRealtorData } from '@common/queries/realtor'
import { ListingCard } from '@components/app/ListingCard'
import { RealtorDashboard } from '@components/app/Dashboard'

export const RealtorListings = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)

  const { slug } = router.query

  const { data: realtorListings, error } = useSWR(
    slug ? `/api/realtor?slug=${slug}` : null,
    (url) => getRealtorData(url)
  )

  useEffect(() => {
    if (realtorListings) {
      setListings(realtorListings.resData)
    }

    setLoading(false)
  }, [realtorListings, slug])

  if (error || !realtorListings || loading) {
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

const RealtorProfile = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [realtor, setRealtorData] = useState(null)
  let { slug } = router.query

  const { data: realtorInfo, error } = useSWR(
    slug ? `/api/realtor/info?slug=${slug}` : null,
    (url) => getRealtorData(url)
  )

  useEffect(() => {
    if (realtorInfo) {
      setRealtorData(realtorInfo.resData)
    }

    setLoading(false)
  }, [realtorInfo, slug])

  if (error || !realtorInfo || loading) {
    return <Spinner />
  }

  return (
    <Layout title={realtor ? realtor.full_name : ''}>
      {realtor ? (
        <>
          <RealtorDashboard realtor={realtor} />
          <Divider text={`Properties listed by ${realtor.full_name}`} />
        </>
      ) : null}
      <main>
        <RealtorListings />
      </main>
    </Layout>
  )
}

export default RealtorProfile

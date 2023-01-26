import useSWR from 'swr'
import { Layout } from '@components/layouts'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'

import { Divider } from '@components/app/Divider'
import { Spinner } from '@components/app/Spinner'
import { getRealtorData } from '@common/queries/realtor'
import { RealtorListings, RealtorDashboard } from '@modules/realtor'

const RealtorsListing = () => {
  const router = useRouter()
  const [realtor, setRealtorData] = useState(null)
  const [loading, setLoading] = useState(true)
  let slug = useRef(null)

  const { data, error } = useSWR(slug ? '/api/realtor/info' : null, (url) =>
    getRealtorData(url, slug)
  )

  useEffect(() => {
    if (router.query.slug) {
      slug.current = router.query.slug
    }

    if (data) {
      setRealtorData(data.resData)
    }
    setLoading(false)
  }, [data, slug])

  if (error || !data || loading) {
    return <Spinner />
  }

  return (
    <Layout title={realtor ? realtor.full_name : ''}>
      {realtor && (
        <>
          <header>
            <RealtorDashboard realtor={realtor} />
          </header>
          {/* Listings by realtor */}
          <Divider text={`Properties listed by ${realtor.full_name}`} />
          <main>
            <RealtorListings />
          </main>
        </>
      )}
    </Layout>
  )
}

export default RealtorsListing

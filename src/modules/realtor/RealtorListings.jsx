import useSWR from 'swr'
import { useEffect, useState } from 'react'

import { Spinner } from '@components/app/Spinner'
import { realtorslisting } from '@queries/realtorListings'
import { renderListings } from '@modules/home/renderListings'

const RealtorListings = ({ slug }) => {
  const [listings, setListings] = useState([])

  const { data, error } = useSWR('/api/realtors', (url) =>
    realtorslisting(url, slug)
  )
  useEffect(() => {
    data && setListings(data.resData)
  }, [data])

  if (error || !data) {
    return <Spinner />
  }

  return (
    <div>
      <main>{listings.length > 0 && renderListings(listings)}</main>
    </div>
  )
}

export default RealtorListings

import useSWR from 'swr'
import { useState, useEffect } from 'react'

import { Pagination } from '@components/app/Pagination'
import { fetchListings } from '@common/queries/listings'
import { ListingsList } from '@components/app/ListingsList'
import { ServerError } from '@components/app/Error'

const SalesListings = () => {
  const [listings, setListings] = useState([])
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  const { data } = useSWR(
    `/api/listings/?page_size=6&page=${page}`,
    fetchListings,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: true,
    }
  )

  useEffect(() => {
    if (data && data.success === true) {
      setTotal(data.resData.count)
      setNext(data.resData.next)
      setPrev(data.resData.previous)
      setListings(data.resData.results)
    }
  }, [data, page])

  if (data && data.success === false) {
    return <ServerError />
  }
  return (
    <div>
      {listings.length > 0 ? (
        <>
          <ListingsList listings={listings} />
          <Pagination
            currentPage={page}
            nextPage={next}
            prevPage={prev}
            total={total}
            setPage={setPage}
          />
        </>
      ) : (
        // Center div using
        <div className='flex justify-center text-2xl'>
          <p>No listings found</p>
        </div>
      )}
    </div>
  )
}

export default SalesListings

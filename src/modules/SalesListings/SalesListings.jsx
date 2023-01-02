import useSWR from 'swr'
import { useState, useEffect, Fragment } from 'react'

import { Spinner } from '@components/app/Spinner'
import { Pagination } from '@components/app/Pagination'
import { fetchListings } from '@common/queries/listings'
import { ListingsList } from '@components/app/ListingsList'

const SalesListings = () => {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState([])
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  const { data, error } = useSWR(
    `/api/listings/?page_size=6&page=${page}`,
    fetchListings,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: true,
    }
  )

  useEffect(() => {
    if (data) {
      setTotal(data.resData.count)
      setNext(data.resData.next)
      setPrev(data.resData.previous)
      setListings(data.resData.results)
    }
    setLoading(false)
  }, [data, page])

  return (
    <Fragment>
      {loading || listings.length === 0 ? (
        <div className='flex justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <Fragment>
          {listings.length > 0 && (
            <Fragment>
              <ListingsList listings={listings} />
              <Pagination
                currentPage={page}
                nextPage={next}
                prevPage={prev}
                total={total}
                setPage={setPage}
              />
            </Fragment>
          )}
          {error && <Spinner />}
        </Fragment>
      )}
    </Fragment>
  )
}

export default SalesListings

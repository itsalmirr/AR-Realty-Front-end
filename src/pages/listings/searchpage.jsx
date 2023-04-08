import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { GiFamilyHouse } from 'react-icons/gi'

import { quickSearch } from '@lib/helpers'
import { ListingsList } from '@components/app/ListingsList'
import { FeaturedListings } from '@components/app/FeaturedListings'
import { API_URL } from '@lib/constants'
import { fetchListings } from '@common/queries/listings'
import { Divider } from '@components/app/Divider'
import { Spinner } from '@components/app/Spinner'
import { NoResults } from '@components/app/NoResults'

const SearchPage = ({ listings }) => {
  const router = useRouter()
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(results.length === 0)

  const handleListingChange = async (query) => {
    try {
      const { results: data } = await quickSearch(query)
      setResults(data)
    } catch (err) {
      toast.error(err.message)
    }
    setLoading(false)
  }

  const renderResults = () => {
    return (
      <div>
        {results.length === 0 ? (
          <div>
            <NoResults />
          </div>
        ) : (
          <ListingsList listings={results} />
        )}
      </div>
    )
  }

  useEffect(() => {
    handleListingChange(router.query.q)
  }, [router.query.q])

  return (
    <>
      <header className='listing-page-cover'>
        <div className='bg-slate-600/80 p-12 text-center md:flex md:items-center md:justify-center'>
          <h2 className='flex justify-center items-center text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate'>
            <GiFamilyHouse className='w-8 h-8 mr-2' />
            <span id='result'>Results for: {router.query.q}</span>
          </h2>
        </div>
      </header>
      <main className='container mx-auto mt-12 w-full'>
        {loading ? <Spinner /> : renderResults()}
        <Divider text={'You may also like'} />
        {listings ? (
          <FeaturedListings featuredListings={listings} />
        ) : (
          <Spinner />
        )}
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const listings = await fetchListings(`${API_URL}/api/listings/random/`)

  return {
    props: {
      listings: listings.results,
    },
    revalidate: 60,
  }
}

export default SearchPage

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { GiFamilyHouse } from 'react-icons/gi'

import { Layout, FeaturedListings, Spinner, NoResults } from '@components/index'
import { quickSearch } from '@lib/helpers'

const SearchPage = () => {
  const router = useRouter()
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(results.length === 0)

  const handlePageChange = async (q) => {
    try {
      const { results: data } = await quickSearch(q)
      setResults(data)
    } catch (err) {
      toast.error(err.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    handlePageChange(router.query.q)
  }, [router.query.q])

  const renderResults = () => {
    return (
      <div>
        {results.length === 0 ? (
          <NoResults />
        ) : (
          <FeaturedListings listings={results} />
        )}
      </div>
    )
  }

  return (
    <Layout title='Search'>
      <header className='listing-page-cover'>
        <div className='bg-slate-600/80 p-12 text-center md:flex md:items-center md:justify-center'>
          <h2 className='flex justify-center items-center text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate'>
            <GiFamilyHouse className='w-8 h-8 mr-2' />
            <span>Results for {router.query.q}</span>
          </h2>
        </div>
      </header>
      <main className='container mx-auto mt-12 w-full'>
        {loading ? <Spinner /> : renderResults()}
      </main>
    </Layout>
  )
}

export default SearchPage

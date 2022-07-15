import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { GiFamilyHouse } from 'react-icons/gi'

import { Layout, FeaturedListings } from '@components/index'
import { quickSearch } from '@lib/helpers'

const SearchPage = () => {
  const router = useRouter()
  const [results, setResults] = useState([])

  const handlePageChange = async (q) => {
    try {
      const { results: data } = await quickSearch(q)
      setResults(data)
    } catch (err) {
      toast.error(err.message)
    }
  }

  useEffect(() => {
    handlePageChange(router.query.q)
  }, [router.query.q])

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
        {results.length === 0 ? (
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-center text-2xl font-bold leading-7 text-gray-500'>
              No results found
            </h2>
            <p className='text-center text-gray-500'>
              Try a different search term or visit the{' '}
              <Link href='/listings'>
                <a className='text-accentDark hover:text-accentDark'>
                  listings page
                </a>
              </Link>
              .
            </p>
          </div>
        ) : (
          <FeaturedListings listings={results} />
        )}
        {/* <Pagination
          currentPage={page}
          nextPage={next}
          prevPage={prev}
          total={total}
          setPage={setPage}
        /> */}
      </main>
    </Layout>
  )
}

export default SearchPage

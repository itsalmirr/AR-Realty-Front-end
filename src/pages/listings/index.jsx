import { useContext } from 'react'
import { GiFamilyHouse } from 'react-icons/gi'

import ListingsContext from '@context/ListingsContext'
import {
  Layout,
  FeaturedListings,
  Pagination,
  Spinner,
} from '@components/index'

const ListingPage = () => {
  const { loading, listings, next, prev, total, page, setPage } =
    useContext(ListingsContext)

  return (
    <Layout title='Listings'>
      <header className='listing-page-cover'>
        <div className='bg-slate-600/80 p-12 text-center md:flex md:items-center md:justify-center'>
          <h2 className='flex justify-center items-center text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate'>
            <GiFamilyHouse className='w-8 h-8 mr-2' />
            <span>Browse our listings</span>
          </h2>
        </div>
      </header>
      <main className='container mx-auto mt-12 w-full'>
        {loading ? <Spinner /> : <FeaturedListings listings={listings} />}
        <Pagination
          currentPage={page}
          nextPage={next}
          prevPage={prev}
          total={total}
          setPage={setPage}
        />
      </main>
    </Layout>
  )
}

export default ListingPage

import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { GiFamilyHouse } from 'react-icons/gi'

import { API_URL } from '@lib/index'
import { Layout, FeaturedListings, Pagination } from '@components/index'

const ListingPage = ({ url }) => {
  const [listings, setListings] = useState([])
  const [next, setNext] = useState(null)
  const [prev, setPrev] = useState(null)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  const getListings = async () => {
    try {
      const res = await axios.get(
        `${url}/api/properties/?limit=6&page=${page}${
          page > 1 ? '&offset=6' : ''
        }`
      )

      setTotal(res.data.count)
      setListings(res.data.results)
      setNext(res.data.next ? res.data.next : null)
      setPrev(res.data.previous ? res.data.previous : null)
    } catch (err) {
      toast.error('Error fetching listings')
    }
  }

  useEffect(() => {
    getListings()
  }, [page])

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
        <FeaturedListings listings={listings} />
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

export const getStaticProps = async () => {
  const url = `${API_URL}`

  return {
    props: {
      url: url,
    },
  }
}

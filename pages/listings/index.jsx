import axios from 'axios'
import useSWR from 'swr'
import { useState, useEffect } from 'react'
import { GiFamilyHouse } from 'react-icons/gi'

import { API_URL } from '@lib/index'
import { fetcher, PER_PAGE } from '@lib/helpers'
import { Layout, FeaturedListings } from '@components/index'

const ListingPage = ({ allData }) => {
  const [next, setNext] = useState(allData.url)
  const [prev, setPrev] = useState('')
  const [listings, setListings] = useState(allData.listings)
  const { data } = useSWR(next, fetcher, {
    revalidate: true,
  })

  useEffect(() => {
    if (data) {
      setNext(data.next ? data.next : '')
      setPrev(data.prev ? data.prev : '')
      setListings(data.results)
    }
  }, [next])

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
      </main>
    </Layout>
  )
}

export default ListingPage

export const getStaticProps = async () => {
  const listings = await axios.get(`${API_URL}/api/properties?limit=6`)
  const url = `${API_URL}/api/properties?limit=${PER_PAGE}&offset=${PER_PAGE}`

  return {
    props: {
      allData: {
        listings: await listings.data.results,
        total: listings.data.count,
        next: listings.data.next,
        previous: listings.data.previous,
        url: url,
      },
    },
  }
}

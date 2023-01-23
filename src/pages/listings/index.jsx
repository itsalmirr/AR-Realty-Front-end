import dynamic from 'next/dynamic'
import { GiFamilyHouse } from 'react-icons/gi'

import { Layout } from '@components/layouts'
import { Spinner } from '@components/app/Spinner'

const SalesListings = dynamic(
  () => import('@modules/SalesListings/SalesListing'),
  {
    loading: () => <Spinner />,
    ssr: false,
  }
)

const PublishedListings = () => (
  <Layout title='Listings For Sales'>
    <header className='listing-page-cover'>
      <div className='bg-slate-600/80 p-12 text-center md:flex md:items-center md:justify-center'>
        <h2 className='flex justify-center items-center text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate'>
          <GiFamilyHouse className='w-8 h-8 mr-2' />
          <span className='font-serif text-2xl'>Listings For Sales</span>
        </h2>
      </div>
    </header>
    <main className='container mx-auto mt-12 w-full'>
      <SalesListings />
    </main>
  </Layout>
)

export default PublishedListings

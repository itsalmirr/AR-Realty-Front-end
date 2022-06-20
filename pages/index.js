import axios from 'axios'

import { API_URL } from '@lib/index'
import { Layout, MainSection, FeaturedListings } from '@components/index'

const Home = ({ listings }) => {
  return (
    <Layout title={'Home'}>
      <main>
        <MainSection />
      </main>
      <section className='lg-relative'>
        <div className='relative mb-12'>
          <div
            className='absolute inset-0 flex items-center'
            aria-hidden='true'>
            <div className='w-full border-t border-gray-300' />
          </div>
          <div className='relative flex justify-center'>
            <span className='px-2 bg-white text-5xl text-gray-500'>
              Featured Listings
            </span>
          </div>
        </div>
        <div className='container mx-auto w-full sm:px-6 lg:px-8'>
          <FeaturedListings listings={listings} />
        </div>
      </section>
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const listings = await axios.get(`${API_URL}/api/properties?limit=3`)

  return {
    props: {
      listings: await listings.data.results,
    },
  }
}

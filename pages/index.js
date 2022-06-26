import axios from 'axios'

import { API_URL } from '@lib/index'
import {
  Layout,
  MainSection,
  FeaturedListings,
  NewsLetter,
  Divider,
} from '@components/index'

const Home = ({ listings }) => {
  return (
    <Layout title={'Home'}>
      <main className='container mx-auto sm:px-6 lg:px-8'>
        <MainSection />
      </main>
      <section className='lg-relative'>
        <Divider text={'Featured Listings'} />
        <div className='container mx-auto sm:px-6 lg:px-8'>
          <FeaturedListings listings={listings} />
        </div>
      </section>
      <section className='lg-relative mt-28'>
        <NewsLetter />
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

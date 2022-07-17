import axios from 'axios'

import { API_URL } from '@lib/constants'
import {
  Layout,
  MainSection,
  FeaturedListings,
  Divider,
} from '@components/index'

const Home = ({ listings }) => {
  return (
    <Layout title={'Home'}>
      <section className='container mx-auto sm:px-6 lg:px-8'>
        <MainSection />
        <div className='my-8'>
          <Divider text={'Featured Listings'} />
        </div>
        <FeaturedListings listings={listings} />
      </section>
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const listings = await axios.get(`${API_URL}/api/listings?limit=3`)

  return {
    props: {
      listings: await listings.data.results,
    },
  }
}

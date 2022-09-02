import axios from 'axios'

import { API_URL } from '@lib/constants'
import {
  Layout,
  MainSection,
  FeaturedListings,
  Divider,
  NewsLetter,
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
        <NewsLetter />
      </section>
    </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const listings = await axios.get(
    `${API_URL}/api/listings/?page_size=3&page=1`
  )

  return {
    props: {
      listings: await listings.data.results,
    },
  }
}

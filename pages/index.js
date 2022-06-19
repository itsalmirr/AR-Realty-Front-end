import {
  Layout,
  MainSection,
  FeaturedListings,
  ListingCard,
} from '@components/index'
import axios from 'axios'
import { API_URL } from '@lib/index'

const Home = ({ listings }) => {
  return (
    <Layout title={'Home'}>
      <main>
        <MainSection />
      </main>
      <section className='lg:relative'>
        <div className='container mx-auto w-full sm:px-6 lg:px-8'>
          <FeaturedListings listings={listings} />
        </div>
      </section>
    </Layout>
  )
}

export default Home

export const getStaticProps = async (ctx) => {
  const listings = await axios.get(`${API_URL}/api/properties`)

  return {
    props: {
      listings: await listings.data,
    },
  }
}

import axios from 'axios'

import { API_URL } from '@lib/constants'
import { Layout } from '@components/app/Layout/index'
import { Home } from '@modules/home/index'

const HomePage = ({ listings }) => {
  return (
    <Layout title={'Home'}>
      <Home listings={listings} />
    </Layout>
  )
}

export default HomePage

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

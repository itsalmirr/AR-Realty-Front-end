import axios from 'axios'

import { API_URL } from '@lib/constants'
import { Layout } from '@components/layouts'
import { Home } from '@modules/home/index'

const HomePage = ({ listings }) => {
  console.log(listings)
  return <Layout title={'Home'}>{/* <Home listings={listings} /> */}</Layout>
}

export default HomePage

export const getStaticProps = async () => {
  const listings = await axios.get(
    `${API_URL}/api/listings/?page_size=3&page=1`
  )

  const data = listings.data
  console.log(data)

  return {
    props: {
      listings: await listings.data.results,
    },
  }
}

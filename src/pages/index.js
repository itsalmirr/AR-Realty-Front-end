import { API_URL } from '@lib/constants'
import { fetchListings } from '@common/queries/listings'
import { Layout } from '@components/layouts'
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
  const listings = await fetchListings(
    `${API_URL}/api/listings/?page_size=3&page=1`
  )

  return {
    props: {
      listings: listings.results,
    },
    revalidate: 60,
  }
}

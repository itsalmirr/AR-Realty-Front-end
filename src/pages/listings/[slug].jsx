import dynamic from 'next/dynamic'

import { API_URL } from '@lib/constants'
import { Layout } from '@components/layouts'
import { fetchListings } from '@common/queries/listings'
import { Spinner } from '@components/app/Spinner'

const ListingPage = dynamic(() => import('@modules/listingpage/ListingPage'), {
  loading: () => <Spinner />,
})

const ListingById = ({ slug, currentListing, featuredListings }) => {
  console.log(featuredListings)
  if (!currentListing) {
    return <Spinner />
  }

  return (
    <Layout title={currentListing.title}>
      <div className='bg-white'>
        <ListingPage
          slug={slug}
          currentListing={currentListing}
          featuredListings={featuredListings}
        />
      </div>
    </Layout>
  )
}

export default ListingById

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params
  const currentListing = await fetchListings(`${API_URL}/api/listings/${slug}`)
  const res = await fetchListings(`${API_URL}/api/listings/random?slug=${slug}`)
  const featuredListings = res.results

  return {
    props: {
      slug,
      currentListing,
      featuredListings,
    },
  }
}

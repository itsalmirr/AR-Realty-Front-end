import dynamic from 'next/dynamic'

import { Layout } from '@components/layouts'
import { Spinner } from '@components/app/Spinner'
import { fetchListings } from '@lib/helpers'

const ListingPage = dynamic(() => import('@modules/listingpage/ListingPage'), {
  loading: () => <Spinner />,
})

const ListingById = ({ slug, currentListing }) => {
  return (
    <Layout title={currentListing.title}>
      {currentListing && (
        <div className='bg-white'>
          <ListingPage slug={slug} currentListing={currentListing} />
        </div>
      )}
    </Layout>
  )
}

export default ListingById

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params
  const currentListing = await fetchListings(slug)

  return {
    props: {
      slug,
      currentListing,
    },
  }
}

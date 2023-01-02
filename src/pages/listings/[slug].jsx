import dynamic from 'next/dynamic'

import { Layout } from '@components/layouts'
import { Spinner } from '@components/app/Spinner'

const ListingPage = dynamic(() => import('@modules/listingpage/ListingPage'), {
  loading: () => <Spinner />,
})

const ListingById = () => {
  return (
    <Layout>
      <div className='bg-white'>
        <ListingPage />
      </div>
    </Layout>
  )
}

export default ListingById

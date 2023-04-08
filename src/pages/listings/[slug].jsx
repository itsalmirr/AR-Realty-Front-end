import dynamic from 'next/dynamic'

import { Spinner } from '@components/app/Spinner'

const ListingPage = dynamic(() => import('@modules/listing/ListingPage'), {
  loading: () => <Spinner />,
})

const ListingById = () => <ListingPage />

export default ListingById

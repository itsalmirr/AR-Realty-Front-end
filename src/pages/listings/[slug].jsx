import { useState } from 'react'
import dynamic from 'next/dynamic'

import { Layout } from '@components/layouts'
import { Spinner } from '@components/app/Spinner'

const ListingPage = dynamic(() => import('@modules/listing/ListingPage'), {
  loading: () => <Spinner />,
})

const ListingById = () => {
  const [title, setTitle] = useState('')

  return (
    <Layout title={title || ' '}>
      <ListingPage setTitle={setTitle} />
    </Layout>
  )
}

export default ListingById

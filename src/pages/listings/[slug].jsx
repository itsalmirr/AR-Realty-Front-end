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
    <Layout title={title ? title : ' '}>
      <div>
        <ListingPage setTitle={setTitle} />
      </div>
    </Layout>
  )
}

export default ListingById

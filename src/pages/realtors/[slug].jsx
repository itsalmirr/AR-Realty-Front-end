import { Layout } from '@components/layouts'
import { useState } from 'react'

import { RealtorListings, RealtorsDashboard } from '@modules/realtor/Realtor'

const RealtorsListing = () => {
  let [title, setTitle] = useState('')

  return (
    <Layout>
      <header>
        <RealtorsDashboard setTitle={setTitle} />
      </header>

      {/* Listings by realtor */}
      <main>
        <RealtorListings />
      </main>
    </Layout>
  )
}

export default RealtorsListing

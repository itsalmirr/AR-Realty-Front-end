import { Fragment } from 'react'

import { Divider } from '@components/app/Divider'
import { ListingCard } from '@components/app/ListingCard'

const FeaturedListings = ({ featuredListings }) => {
  return (
    <Fragment>
      <Divider text={'Featured Listings'} />
      <section className='space-y-4 px-2 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'>
        {featuredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </section>
    </Fragment>
  )
}

export default FeaturedListings

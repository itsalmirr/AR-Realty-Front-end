import AOS from 'aos'
import { useEffect } from 'react'

import { ListingCard } from '@components/index'

const FeaturedListings = ({ listings }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      mirror: true,
      delay: 100,
      offset: 100,
    })
  }, [])

  return (
    <div className='space-y-4 px-2 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'>
      {listings.map((listing) =>
        listing.is_published ? (
          <ListingCard key={listing.id} listing={listing} />
        ) : null
      )}
    </div>
  )
}

export default FeaturedListings

import { FeaturedListings } from '@components/app/FeaturedListings'

export const renderListings = (listings) => {
  const noListings = (
    <div className='flex flex-col items-center justify-center'>
      <p className='text-center text-accentDark text-lg mb-12'>
        Check back later for more listings.
      </p>
    </div>
  )
  // Check if listings are equal to null
  if (listings === null || listings === undefined) {
    return noListings
  }
  if (listings.length === 0) {
    return noListings
  }
  return <FeaturedListings featuredListings={listings} />
}

import MainSection from './MainSection'
import { ListingCard } from '@components/app/ListingCard'
import { NewsLetter } from '@components/marketing/NewsLetter'
import { Divider } from '@components/app/Divider'

const Home = ({ listings }) => {
  const renderListings = () => {
    if (listings.length === 0 || listings === undefined) {
      return (
        <div className='flex flex-col items-center justify-center'>
          <p className='text-center text-accentDark text-lg mb-12'>
            Check back later for more listings.
          </p>
        </div>
      )
    }
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

  return (
    <section className='container mx-auto sm:px-6 lg:px-8'>
      <MainSection />
      <div className='my-8'>
        <Divider text={'Featured Listings'} />
      </div>
      {renderListings()}
      <NewsLetter />
    </section>
  )
}

export default Home

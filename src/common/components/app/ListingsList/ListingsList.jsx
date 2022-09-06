import { ListingCard } from '@components/app/ListingCard'

const ListingsForSale = ({ listings }) => {
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

export default ListingsForSale

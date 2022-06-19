import AOS from 'aos'
import { useEffect } from 'react'

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
    <ul
      role='list'
      className='space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'>
      {listings.map((listing) =>
        listing.is_published ? (
          <li
            key={listing.id}
            className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
            <div className='flex-1 flex flex-col'>
              <img
                className=' flex-shrink-0 mx-auto rounded-sm'
                src={listing.photo_main}
                alt={listing.description}
              />
              <h3 className='mt-6 text-gray-900 text-md font-medium'>
                {listing.title}
              </h3>
            </div>
          </li>
        ) : null
      )}
    </ul>
  )
}

export default FeaturedListings

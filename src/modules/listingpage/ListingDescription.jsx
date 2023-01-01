import { useState, memo } from 'react'

const ListingDescription = ({ listing }) => {
  const [fullDescription, setFullDescription] = useState(false)

  return (
    <div className='relative'>
      <span className='inline-flex items-center px-2.5 py-2.5 rounded-md text-xs bg-gray-300 text-black font-bold'>
        DESCRIPTION
      </span>
      <p className='mt-6 text-lg font-medium text-gray-600 max-w-lg'>
        {fullDescription
          ? listing.description
          : `${listing.description.slice(0, 200)}...`}
      </p>
      <br />
      <button
        onClick={() => setFullDescription(!fullDescription)}
        className='text-sm border p-1 mb-8 lg:mb-0 font-semibold text-primaryDark hover:bg-gray-200'
      >
        {fullDescription ? 'HIDE FULL DESCRIPTION' : 'READ FULL DESCRIPTION'}
      </button>
    </div>
  )
}

export default memo(ListingDescription)

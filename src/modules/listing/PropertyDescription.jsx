import { useState } from 'react'

const PropertyDescription = ({ listing }) => {
  const [fullDescription, setFullDescription] = useState(false)

  return (
    <div className='relative'>
      <span className='inline-flex items-center px-2.5 py-2.5 rounded-md text-xs dark:bg-primary-dark dark:text-textColor-100 bg-gray-300 text-black font-bold'>
        DESCRIPTION
      </span>
      <p className='mt-6 text-lg font-medium dark:text-textColor-100 text-gray-600 max-w-lg'>
        {fullDescription
          ? listing.description
          : `${listing.description.slice(0, 200)}...`}
      </p>
      <br />
      <button
        onClick={() => setFullDescription(!fullDescription)}
        className='text-sm p-1 mb-8 lg:mb-0 font-semibold dark:text-primary-dark text-primary-light'
      >
        {fullDescription ? 'Less' : `More`}
      </button>
    </div>
  )
}

export default PropertyDescription

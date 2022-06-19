const products = [
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc:
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    imageAlt:
      'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80',
  },
  {
    id: 2,
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc:
      'https://images.unsplash.com/photo-1630650231815-a567e2ed26cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    imageAlt:
      'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1630650231815-a567e2ed26cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 3,
    title: 'Medium Stuff Satchel',
    href: '#',
    price: '$2,000,000',
    imageSrc:
      'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    role: '$3,200,000',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: 3,
    title: 'Medium Stuff Satchel',
    href: '#',
    price: '$2,000,000',
    imageSrc:
      'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    role: '$3,200,000',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  // More products...
]

import { FaPhone } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const ListingCard = ({ listings }) => {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {listings.map((listing) => (
        <li
          key={listing.id}
          className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'>
          <div className='flex-1 flex flex-col py-4'>
            <img
              className=' flex-shrink-0 mx-auto rounded-sm'
              src={listing.photo_main}
              alt={listing.description}
            />
            <h3 className='mt-6 text-gray-900 text-sm font-medium'>
              {listing.title}
            </h3>
            <dl className='mt-1 flex-grow flex flex-col justify-between'>
              <dt className='sr-only'>Title</dt>
              <dd className='text-gray-500 text-sm'>{listing.address}</dd>
              <dt className='sr-only'>Price</dt>
              <dd className='mt-3'>
                <span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                  {listing.price}
                </span>
              </dd>
            </dl>
          </div>
          {/* <div>
            <div className='-mt-px flex divide-x divide-gray-200'>
              <div className='w-0 flex-1 flex'>
                <a
                  href={`mailto:${person.email}`}
                  className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'>
                  <HiMail
                    className='w-5 h-5 text-gray-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>Email</span>
                </a>
              </div>
              <div className='-ml-px w-0 flex-1 flex'>
                <a
                  href={`tel:${person.telephone}`}
                  className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'>
                  <FaPhone
                    className='w-5 h-5 text-gray-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>Call</span>
                </a>
              </div>
            </div>
          </div> */}
        </li>
      ))}
    </ul>
  )
}

export default ListingCard

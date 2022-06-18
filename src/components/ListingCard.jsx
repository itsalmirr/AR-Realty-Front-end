const products = [
  {
    id: 1,
    name: 'Nomad Pouch',
    href: '#',
    price: '$50',
    availability: 'White and Black',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-07-product-01.jpg',
    imageAlt:
      'White fabric pouch with white zipper, black zipper pull, and black elastic loop.',
  },
  {
    id: 2,
    name: 'Zip Tote Basket',
    href: '#',
    price: '$140',
    availability: 'Washed Black',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-07-product-02.jpg',
    imageAlt:
      'Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.',
  },
  {
    id: 3,
    name: 'Medium Stuff Satchel',
    href: '#',
    price: '$220',
    availability: 'Blue',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/category-page-07-product-03.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]
import { FaPhone } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const ListingCard = () => {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 overflow-hidden sm:py-24 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8'>
          {products.map((product) => (
            <div>
              <a key={product.id} href={product.href} className='group text-sm'>
                <div className='w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100 group-hover:opacity-75'>
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className='w-full h-full object-center object-cover'
                  />
                </div>
                <div className='-mt-px flex divide-x divide-gray-200'>
                  <div className='w-0 flex-1 flex'>
                    <a
                      href='#'
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
                      href='#'
                      className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'>
                      <FaPhone
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>Call</span>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListingCard

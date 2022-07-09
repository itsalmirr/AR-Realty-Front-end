import { FaPhone } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

import { formatPhoneNumber } from '@lib/helpers'

const RealtorDescription = ({ listing }) => {
  return (
    <section className='bg-white overflow-hidden'>
      <div className='relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20'>
        <svg
          className='absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden'
          width={784}
          height={404}
          fill='none'
          viewBox='0 0 784 404'
          aria-hidden='true'>
          <defs>
            <pattern
              id='e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'>
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-primaryDark'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={784}
            height={404}
            fill='url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)'
          />
        </svg>

        <svg
          className='hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2'
          width={404}
          height={784}
          fill='none'
          viewBox='0 0 404 784'
          aria-hidden='true'>
          <defs>
            <pattern
              id='56409614-3d62-4985-9a10-7ca758a8f4f0'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'>
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className='text-primaryDark'
                fill='currentColor'
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill='url(#56409614-3d62-4985-9a10-7ca758a8f4f0)'
          />
        </svg>

        <div className='relative lg:flex lg:items-center'>
          <div className='hidden lg:block lg:flex-shrink-0'>
            <img
              className='h-64 w-64 rounded-full xl:h-80 xl:w-80'
              src={listing.realtor.photo}
              alt=''
            />
          </div>

          <div className='relative lg:ml-10'>
            <svg
              className='absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50'
              stroke='currentColor'
              fill='none'
              viewBox='0 0 144 144'
              aria-hidden='true'>
              <path
                strokeWidth={2}
                d='M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z'
              />
            </svg>
            <blockquote className='relative'>
              <div className='text-md leading-9 font-medium text-gray-900'>
                <p>{listing.realtor.description}</p>
              </div>
              <footer className='mt-8'>
                <p className='text-base font-medium text-gray-500'>
                  {listing.realtor.full_name} |{' '}
                  <strong className='text-primaryDark'>Realtor</strong>
                </p>
                <br />
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <FaPhone
                      className='h-6 w-6 text-primaryDark'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 text-base text-gray-500'>
                    <p>+1 {formatPhoneNumber(listing.realtor.phone)}</p>
                    <p className='mt-1'>Mon-Fri 8am to 6pm EST</p>
                  </div>
                </div>
                <br />
                <div className='flex'>
                  <div className='flex-shrink-0'>
                    <FiMail
                      className='h-6 w-6 text-primaryDark'
                      aria-hidden='true'
                    />
                  </div>
                  <div className='ml-3 text-base text-gray-500'>
                    <p>{listing.realtor.email}</p>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RealtorDescription

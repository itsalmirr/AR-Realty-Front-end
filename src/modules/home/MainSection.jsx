import Link from 'next/link'

import { metrics } from '@lib/constants'

const MainSection = () => {
  return (
    <main className='lg:relative'>
      <div className='w-full pt-16 pb-20 text-center lg:py-48 lg:text-left'>
        <div className='px-4 lg:w-1/2 sm:px-8 xl:pr-16'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl'>
            <span className='block xl:inline'>Discover a place</span>{' '}
            <span className='block text-primaryDark xl:inline'>
              you&apos;ll love to live
            </span>
          </h1>
          <p className='mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl'>
            Find your place with an immersive photo experience and the most
            listings, including things you won&apos;t find anywhere else.
          </p>
          <div className='mt-4 grid grid-cols-1 gap-y-12 gap-x-6 border-t border-gray-200 sm:grid-cols-2'>
            {metrics.map((item) => (
              <p key={item.id}>
                <span className='block mt-4 text-2xl font-bold text-primaryDark'>
                  {item.stat}
                </span>
                <span className='mt-2 block text-base text-gray-500'>
                  <span className='font-medium text-accentDark'>
                    {item.emphasis}
                  </span>{' '}
                  {item.rest}
                </span>
              </p>
            ))}
          </div>
          <div className='mt-10 sm:flex sm:justify-center lg:justify-start'>
            <div className='rounded-md shadow'>
              <Link
                href='/listings'
                className='w-full flex items-center justify-center px-2 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primaryDark hover:bg-accentDark md:py-4 md:text-lg md:px-10'
              >
                Explore
              </Link>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <Link
                href='/about'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primaryDark bg-white hover:bg-gray-50 hover:text-accentDark md:py-4 md:text-lg md:px-10'
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='relative w-full h-64 mt-8 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full'>
        <img
          className='absolute inset-0 w-full h-4/5 object-cover'
          src={imgUrls[0].url}
          alt={imgUrls[0].alt}
        />
      </div>
    </main>
  )
}

export default MainSection

const imgUrls = [
  {
    url: 'https://res.cloudinary.com/iamalmiir/image/upload/v1655751319/undraw_house_searching_re_stk8_ddkm2k.svg',
    alt: 'Searching for houses',
  },
]

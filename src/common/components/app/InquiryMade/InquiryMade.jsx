import Image from 'next/image'
import Link from 'next/link'

import { links } from '@common/lib/constants'

const InquiryMade = () => {
  const inquiryMadeImg =
    'https://res.cloudinary.com/iamalmiir/image/upload/v1667350951/undraw_awesome_rlvy_hfbadt.svg'

  return (
    <div className='bg-white my-12'>
      <main className='sm:flex'>
        <Image
          src={inquiryMadeImg}
          className='h-1/5 w-1/3 lg:w-1/4'
          width={500}
          height={500}
          placeholder='blur'
          blurDataURL={inquiryMadeImg}
        />
        <div className='sm:ml-6 lg:mt-18'>
          <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
              Inquiry sent!
            </h1>
            <p className='mt-1 text-base text-gray-500'>
              We will get back to you as soon as possible.
            </p>
          </div>
          <div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
            <Link
              href={links.listings}
              className='inline-flex items-center rounded-md border border-transparent bg-primaryDark px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryLight'
            >
              Browse more listings
            </Link>
            <Link
              href={links.dashboard}
              className='inline-flex items-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-primaryDark hover:bg-gray-300'
            >
              Go to your dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default InquiryMade

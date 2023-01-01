import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { links } from '@lib/constants'
import { Divider } from '@components/app/Divider'

const UserNotSigned = () => {
  const notSignedInImg =
    'https://res.cloudinary.com/iamalmiir/image/upload/v1672178839/undraw_reminder_re_fe15_d8yuav.svg'

  return (
    <Fragment>
      <Divider text={'Get in touch with us'} />
      <div className='bg-white my-12'>
        <main className='sm:flex'>
          <Image
            className='h-1/3 w-1/3 lg:h-1/5 lg:w-1/5'
            src={notSignedInImg}
            width={500}
            height={500}
            placeholder='blur'
            blurDataURL={notSignedInImg}
          />
          <div className='sm:ml-6 lg:mt-18'>
            <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                Sign in to make an inquiry
              </h1>
              <p className='mt-1 text-base text-gray-500'>
                You need to be signed in to make an inquiry.
              </p>
            </div>
            <div className='mt-6 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
              <Link
                href={links.login}
                className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primaryDark hover:bg-accentDark'
              >
                Sign in
              </Link>
              <Link
                href={links.register}
                className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-primaryDark bg-white hover:bg-gray-50'
              >
                Sign up
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  )
}

export default UserNotSigned

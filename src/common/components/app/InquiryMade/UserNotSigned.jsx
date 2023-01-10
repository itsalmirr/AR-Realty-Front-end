import { useTheme } from 'next-themes'
import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { links } from '@lib/constants'
import { Divider } from '@components/app/Divider'

const UserNotSigned = () => {
  const { theme } = useTheme()
  const notSignedInImg =
    'https://res.cloudinary.com/iamalmiir/image/upload/v1673312900/ar/undraw_mobile_login_re_9ntv_1_nonona.svg'

  const notSignedInImgDark =
    'https://res.cloudinary.com/iamalmiir/image/upload/v1673312900/ar/undraw_mobile_login_re_9ntv_k7vfdy.svg'

  return (
    <Fragment>
      <Divider text={'Get in touch with us'} />
      <div className='my-12'>
        <main className='sm:flex'>
          <Image
            className='h-1/3 w-1/3 lg:h-1/5 lg:w-1/5'
            src={theme === 'dark' ? notSignedInImgDark : notSignedInImg}
            width={500}
            height={500}
            placeholder='blur'
            blurDataURL={notSignedInImg}
          />
          <div className='sm:ml-6 lg:mt-18'>
            <div className='sm:border-l sm:border-gray-200 dark:sm:border-textColor-100 sm:pl-6'>
              <h1 className='text-4xl font-bold tracking-tight dark:text-primary-dark text-gray-900 sm:text-5xl'>
                Sign in to make an inquiry
              </h1>
              <p className='mt-1 text-base dark:text-textColor-100 text-gray-500'>
                You need to be signed in to make an inquiry.
              </p>
            </div>
            <div className='mt-6 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
              <Link
                href={links.login}
                className='inline-flex items-center px-4 py-2 border border-transparent text-base font-bold rounded-md shadow-sm dark:text-textColor-100 dark:bg-primary-dark dark:hover:bg-accent-dark dark:hover:text-background-dark text-white bg-primary-light hover:bg-accent-light'
              >
                Sign in
              </Link>
              <Link
                href={links.register}
                className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm dark:text-background-dark dark:bg-textColor-100 dark:hover:bg-gray-300 text-primary-light bg-white hover:bg-gray-50'
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

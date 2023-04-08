import Link from 'next/link'
import Image from 'next/image'

import { links, logoImg } from '@lib/constants'
import { Footer } from '@components/marketing/Footer'

const Auth = ({ Form, type }) => {
  const title =
    type === 'login' ? 'Log in to your account' : 'Register for an account'
  const link = type === 'login' ? 'register here' : 'log in here'

  return (
    <>
      <div className='flex justify-center mt-20 h-screen py-4'>
        <div className='w-80 lg:w-1/4'>
          <div className='sm:mx-auto  sm:w-full sm:max-w-md'>
            <Link href={links.home}>
              <Image
                className='mx-auto h-12 w-18 rounded-lg dark:bg-background-dark bg-primary-light'
                src={logoImg}
                width={90}
                height={180}
                alt='AR Realty Logo'
              />
            </Link>
            <h2 className='mt-4 text-center text-xl lg:text-2xl font-extrabold dark:text-textColor-200 text-gray-900'>
              {title}
            </h2>
            <p className='mt-2 text-center text-sm dark:text-textColor-100 text-gray-600'>
              Or
              {'  '}
              <Link
                href={type === 'login' ? links.register : links.login}
                className='font-medium dark:text-primary-dark dark:hover:text-accent-dark text-primary-light hover:text-accent-light'
              >
                {link}
              </Link>
            </p>
          </div>
          <div className='mt-8'>
            <div className='bg-white rounded-lg dark:bg-background-dark py-8 shadow-lg dark:shadow-black sm:rounded-lg px-6'>
              {Form}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Auth

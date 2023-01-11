import Link from 'next/link'
import Image from 'next/image'

import { links } from '@lib/constants'
import { Layout } from '@components/layouts'
import { RegisterForm } from '@components/app/Forms'

const Register = () => {
  const logoImg =
    'https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png'

  return (
    <Layout title='Register'>
      <div className='min-h-full flex flex-col justify-center py-4 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <Image
            className='mx-auto h-12 w-15 rounded-lg dark:bg-background-dark bg-primary-light'
            width={120}
            height={150}
            src={logoImg}
            alt={'AR Realty Logo'}
          />
          <h2 className='text-center text-3xl mt-8 font-extrabold dark:text-textColor-100 text-gray-900'>
            Register for an account
          </h2>
          <p className='mt-2 text-center text-sm dark:text-gray-400 text-gray-600'>
            Already have an account?{' '}
            <Link
              href={links.login}
              className='font-medium text-primary-light dark:text-primary-dark dark:hover:text-accent-dark hover:text-accent-light'
            >
              Log in
            </Link>
          </p>
        </div>

        <div className='mt-2 mb-12 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white dark:bg-background-dark dark:shadow-lg dark:shadow-black py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <RegisterForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register

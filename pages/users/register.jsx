import Link from 'next/link'

import { links } from '@lib/constants'
import { Layout, RegisterForm } from '@components/index'
import { ContinueWithProvider } from '@components/FormComponents'

const Register = () => {
  return (
    <Layout title='Register'>
      <div className='min-h-full flex flex-col justify-center sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            height={48}
            width={48}
            src='https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png'
            alt='Workflow'
          />
          <h2 className='text-center text-3xl font-extrabold text-gray-900'>
            Register for an account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Already have an account?{' '}
            <Link href={links.login}>
              <a
                href='#'
                className='font-medium text-primaryLight hover:text-accentDark'>
                Log in
              </a>
            </Link>
          </p>
        </div>

        <div className='mt-2 mb-12 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <RegisterForm />

            {/* Providers Google, Twitter, Github */}
            <ContinueWithProvider />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register

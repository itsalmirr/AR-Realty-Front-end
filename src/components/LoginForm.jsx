import { Fragment } from 'react'
import { links } from '@lib/index'
import {
  FormInput,
  FormButton,
  ContinueWithProvider,
} from '@components/FormComponents'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <Fragment>
      <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Log in to your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{' '}
            <Link href={links.register}>
              <a
                href='#'
                className='font-medium text-primaryLight hover:text-accentDark'
              >
                register here
              </a>
            </Link>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form className='space-y-6' action='#' method='POST'>
              <FormInput
                name='email'
                type='email'
                label='Email address'
                placeholder='Email address'
                required
              />
              <FormInput
                name='password'
                type='password'
                label='Password'
                required
              />
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <input
                    id='remember-me'
                    name='remember-me'
                    type='checkbox'
                    className='h-4 w-4 text-primaryLight focus:ring-accentDark border-gray-300 rounded'
                  />
                  <label
                    htmlFor='remember-me'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    Remember me
                  </label>
                </div>

                <div className='text-sm'>
                  <a
                    href='#'
                    className='font-medium text-primaryLight hover:text-accentDark'
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <FormButton type={'submit'} label='Log in' />
            </form>
            <ContinueWithProvider />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default LoginForm

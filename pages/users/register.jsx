import Layout from '@components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { links } from '@lib/index'
import RegisterForm from '@components/RegisterForm'
import { ContinueWithProvider } from '@components/FormComponents'
import { Fragment } from 'react'

const Register = () => {
  return (
    <Layout title='Register'>
      <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            height={48}
            width={48}
            src='https://tailwindui.com/img/logos/workflow-mark-primaryLight.svg'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Register for an account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Already have an account?{' '}
            <Link href={links.register}>
              <a
                href={links.register}
                className='font-medium text-primaryLight hover:text-accentDark'
              >
                Log in
              </a>
            </Link>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <RegisterForm />
            <ContinueWithProvider />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Register

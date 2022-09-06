import Link from 'next/link'
import { toast } from 'react-toastify'

import { links } from '@lib/constants'
import { Layout } from '@components/layouts'
import { LoginForm } from '@components/app/Forms/LoginForm'

const LoginPage = () => {
  return (
    <Layout title='Login'>
      <div className='min-h-full flex flex-col justify-center py-4 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-15 rounded-lg bg-primaryDark'
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
                className='font-medium text-primaryLight hover:text-accentDark'>
                register here
              </a>
            </Link>
          </p>
        </div>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default LoginPage

export const getServerSideProps = (ctx) => {
  try {
    const { access, refresh } = ctx.req.cookies

    if (access || refresh) {
      ctx.res.writeHead(302, {
        Location: links.dashboard,
      })
      ctx.res.end()
    }
  } catch (error) {
    toast.error('Something went wrong')
  }

  return {
    props: {},
  }
}

import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-toastify'

import { links } from '@lib/constants'
import { Layout } from '@components/layouts'
import { LoginForm } from '@components/app/Forms/LoginForm'

const LoginPage = () => {
  const logoImg =
    'https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png'

  return (
    <Layout title='Login'>
      <div className='min-h-full flex flex-col justify-center py-4 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <Image
            className='mx-auto h-12 w-15 rounded-lg dark:bg-background-dark bg-primary-light'
            src={logoImg}
            width={120}
            height={150}
            alt={'AR Realty Logo'}
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold dark:text-textColor-200 text-gray-900'>
            Log in to your account
          </h2>
          <p className='mt-2 text-center text-sm dark:text-textColor-100 text-gray-600'>
            Or{' '}
            <Link
              href={links.register}
              className='font-medium dark:text-primary-dark dark:hover:text-accent-dark text-primary-light hover:text-accent-light'
            >
              register here
            </Link>
          </p>
        </div>
        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white dark:bg-background-dark py-8 px-4 shadow-lg dark:shadow-black sm:rounded-lg sm:px-10'>
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
    if (access && refresh) {
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

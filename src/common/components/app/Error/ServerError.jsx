import Image from 'next/image'
import Link from 'next/link'

const serverDownSvg =
  'https://res.cloudinary.com/iamalmiir/image/upload/v1673904015/ar/undraw_server_down_s-4-lk_fqhv44.svg'

const ServerError = () => (
  <div className='flex min-h-full flex-col pt-16 pb-12'>
    <main className='mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8'>
      <div className='flex flex-shrink-0 justify-center'>
        <Image
          className='h-32 w-auto'
          width={120}
          height={120}
          src={serverDownSvg}
          alt=''
        />
      </div>
      <div className='py-16'>
        <div className='text-center'>
          <p className='text-2xl lg:text-4xl font-semibold text-primary-light dark:text-primary-dark'>
            Uh oh!
          </p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight dark:text-textColor-100 text-textColor-icons sm:text-5xl'>
            Something went wrong
          </h1>
          <p className='mt-2 text-base text-gray-500 dark:text-gray-400'>
            We&apos;re working on getting this fixed as soon as we can. Please
            check back later.
          </p>
          <div className='mt-6'>
            <Link
              href='/'
              className='text-base font-medium text-accent-light dark:text-accent-dark hover:text-primary-light dark:hover:text-primary-dark'
            >
              Go back home
              <span aria-hidden='true'> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default ServerError

import Link from 'next/link';
import Image from 'next/image';

import { links, logoImg } from '@lib/constants';
import { Footer } from '@components/marketing/Footer';

const Auth = ({ Form, type }) => {
  const title = type === 'login' ? 'Log in to your account' : 'Register for an account';
  const link = type === 'login' ? 'register here' : 'log in here';

  return (
    <>
      <div className='flex justify-center items-center h-screen py-4 sm:px-6 lg:px-8'>
        <div className='lg:w-1/2'>
          <div className='sm:mx-auto  sm:w-full sm:max-w-md'>
            <Link href={links.home}>
              <Image
                className='mx-auto h-16 w-18 rounded-lg dark:bg-background-dark bg-primary-light'
                src={logoImg}
                width={90}
                height={180}
                alt='AR Realty Logo'
              />
            </Link>
            <h2 className='mt-6 text-center text-2xl lg:text-3xl font-extrabold dark:text-textColor-200 text-gray-900'>
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
          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white rounded-lg dark:bg-background-dark py-8 px-4 shadow-lg dark:shadow-black sm:rounded-lg sm:px-10'>
              {Form}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auth;

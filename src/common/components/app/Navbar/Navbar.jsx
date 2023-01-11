import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { Fragment, useContext } from 'react'
import { Disclosure } from '@headlessui/react'
import { MdOutlineClose, MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

import Search from './Search'
import UserMenu from './UserMenu'
import { classNames } from '@lib/helpers'
import AuthContext from '@context/AuthContext'
import MobileMenuDropDown from './MobileMenuDropDown'
import { navigation, userNavigation, links, companyLogo } from '@lib/constants'

const Navbar = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  const { setTheme, resolvedTheme } = useTheme()
  const { isLoading, isLoggedIn, logoutUser, user } = useContext(AuthContext)

  const handlePageChange = (path) => {
    if (path.href === currentRoute) {
      path.current = true
    } else {
      path.current = false
    }

    return ''
  }

  return (
    <Disclosure
      as='header'
      className='bg-primary-light dark:bg-background-dark'
      id='navbar'
    >
      {({ open }) => (
        <Fragment>
          <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8'>
            <div className='relative h-16 flex justify-between'>
              <div className='relative z-10 px-2 flex lg:px-0'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link href='/'>
                    <Image
                      width={100}
                      height={100}
                      placeholder='blur'
                      blurDataURL={companyLogo}
                      className='block h-8 w-auto cursor-pointer'
                      src={companyLogo}
                      alt='AR Realty Logo'
                    />
                  </Link>
                </div>
              </div>
              {/* Search Section */}
              <Search />
              <div className='relative z-10 flex items-center lg:hidden'>
                <Disclosure.Button className='rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white'>
                  <span className='sr-only'>Open menu</span>
                  {open ? (
                    <MdOutlineClose
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  ) : (
                    <HiOutlineMenuAlt4
                      className='block h-6 w-6'
                      aria-hidden='true'
                    />
                  )}
                </Disclosure.Button>
              </div>
              {!isLoading && (
                <div className='hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center'>
                  {user && (
                    <UserMenu
                      Link={Link}
                      Fragment={Fragment}
                      userNavigation={userNavigation}
                      user={user}
                      logoutUser={logoutUser}
                      classNames={classNames}
                    />
                  )}
                  {!isLoggedIn && <LoginButton path={currentRoute} />}
                  <button
                    onClick={() =>
                      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                    }
                    className='flex justify-center items-center p-3'
                  >
                    {resolvedTheme === 'dark' ? (
                      <MdOutlineLightMode className='text-2xl text-yellow-500' />
                    ) : (
                      <MdDarkMode className='text-2xl text-slate-800' />
                    )}
                  </button>
                </div>
              )}
            </div>
            <nav
              className='hidden lg:py-2 lg:flex lg:space-x-8'
              aria-label='Global'
            >
              {navigation.map((path) => (
                <Link
                  href={path.href}
                  key={path.name}
                  onClick={handlePageChange(path)}
                  className={classNames(
                    path.current
                      ? 'bg-gray-200 dark:text-gray-800'
                      : 'text-gray-300 dark:hover:bg-accent-darker hover:bg-accent-light hover:text-white',
                    'rounded-md py-2 px-2 inline-flex items-center text-sm font-medium'
                  )}
                  aria-current={path.current ? 'page' : undefined}
                >
                  {path.name}
                </Link>
              ))}
            </nav>
          </div>
          <MobileMenuDropDown
            Disclosure={Disclosure}
            navigation={navigation}
            userNavigation={userNavigation}
            user={user}
            Link={Link}
            logoutUser={logoutUser}
            isLoggedIn={isLoggedIn}
            classNames={classNames}
            links={links}
          />
        </Fragment>
      )}
    </Disclosure>
  )
}

export default Navbar

const LoginButton = ({ path }) => {
  return (
    <Fragment>
      {path !== '/users/login' ? (
        <Link href={links.login} className='mr-4'>
          <button
            id='login'
            className='bg-accent-light dark:bg-primary-dark dark:hover:bg-accent-darker hover:text-gray-100 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'
          >
            Log in
          </button>
        </Link>
      ) : null}
    </Fragment>
  )
}

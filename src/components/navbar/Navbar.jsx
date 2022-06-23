import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useContext } from 'react'
import { Disclosure } from '@headlessui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { MdOutlineClose, MdOutlineSearch } from 'react-icons/md'

import AuthContext from '@context/AuthContext'
import UserMenu from '@components/navbar/UserMenu'
import { MobileMenuDropDown } from '@components/index'
import { navigation, userNavigation, links, classNames } from '@lib/index'

const Navbar = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  const { isLoading, isLoggedIn, logoutUser, user } = useContext(AuthContext)

  const handlePageChange = (item) => {
    if (item.href === currentRoute) {
      item.current = true
    } else {
      item.current = false
    }

    return ''
  }

  return (
    <Disclosure as='header' className='bg-primaryDark'>
      {({ open }) => (
        <Fragment>
          <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8'>
            <div className='relative h-16 flex justify-between'>
              <div className='relative z-10 px-2 flex lg:px-0'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link href='/'>
                    <img
                      className='block h-8 w-auto cursor-pointer'
                      src='https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png'
                      alt='AR Realty Logo'
                    />
                  </Link>
                </div>
              </div>
              <div className='relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0'>
                <div className='w-full sm:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Search
                  </label>
                  <div className='relative'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center'>
                      <MdOutlineSearch
                        className='h-5 w-5 text-gray-800'
                        aria-hidden='true'
                      />
                    </div>
                    <input
                      id='search'
                      name='search'
                      className='block w-full bg-gray-100 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-800 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm'
                      placeholder='Enter an address, city, state, or ZIP code'
                      type='search'
                    />
                  </div>
                </div>
              </div>
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
                  {user ? (
                    <UserMenu
                      userNavigation={userNavigation}
                      user={user}
                      logoutUser={logoutUser}
                      classNames={classNames}
                    />
                  ) : (
                    <LoginButton path={currentRoute} />
                  )}
                </div>
              )}
            </div>
            <nav
              className='hidden lg:py-2 lg:flex lg:space-x-8'
              aria-label='Global'>
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a
                    href='#'
                    onClick={handlePageChange(item)}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200'
                        : 'text-gray-300 hover:bg-accentDark hover:text-white',
                      'rounded-md py-2 px-2 inline-flex items-center text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}>
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
          <MobileMenuDropDown
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
        <Link href={links.login}>
          <a className='mr-4'>
            <button className='bg-gray-800 hover:bg-accentDark text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'>
              Login
            </button>
          </a>
        </Link>
      ) : null}
    </Fragment>
  )
}

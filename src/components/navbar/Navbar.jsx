import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useContext } from 'react'
import { Disclosure } from '@headlessui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { MdOutlineClose, MdOutlineSearch } from 'react-icons/md'

import UserMenu from '@components/navbar/UserMenu'
import AuthContext from '@context/AuthContext'
import { MobileMenuDropDown, Spinner } from '@components/index'
import { navigation, userNavigation, links, classNames } from '@lib/index'

const Navbar = () => {
  const router = useRouter()
  const { isLoading, isLoggedIn, logoutUser, user } = useContext(AuthContext)
  const handlePageChange = (item) => {
    if (item.href === router.pathname) {
      item.current = true
    } else {
      item.current = false
    }
    return ''
  }

  // if (isLoading || !isLoggedIn || !user) {
  //   return (
  //     <svg
  //       role='status'
  //       class='inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
  //       viewBox='0 0 100 101'
  //       fill='none'
  //       xmlns='http://www.w3.org/2000/svg'>
  //       <path
  //         d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
  //         fill='currentColor'
  //       />
  //       <path
  //         d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
  //         fill='currentFill'
  //       />
  //     </svg>
  //   )
  // }

  return (
    <Disclosure as='header' className='bg-primaryDark'>
      {({ open }) => (
        <Fragment>
          <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8'>
            <div className='relative h-16 flex justify-between'>
              <div className='relative z-10 px-2 flex lg:px-0'>
                <div className='flex-shrink-0 flex items-center'>
                  <img
                    className='block h-8 w-auto'
                    src='https://res.cloudinary.com/iamalmiir/image/upload/v1654999279/logoLarge_v9hemr.png'
                    alt='AR Realty Logo'
                  />
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
              {!isLoading ? (
                <div className='hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center'>
                  {isLoggedIn ? (
                    <UserMenu
                      userNavigation={userNavigation}
                      user={user}
                      logoutUser={logoutUser}
                      classNames={classNames}
                    />
                  ) : (
                    <LoginButton />
                  )}
                </div>
              ) : (
                ''
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
                        ? 'bg-gray-200 text-black'
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

const LoginButton = () => {
  return (
    <Fragment>
      <Link href={links.login}>
        <a className='mr-4'>
          <button className='bg-gray-800 hover:bg-accentDark text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline'>
            Login
          </button>
        </a>
      </Link>
    </Fragment>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { classNames } from '@lib/index'
import MobileMenu from '@components/MobileMenu'
import { MdOutlineSearch } from 'react-icons/md'
import { navigation, userNavigation, user } from '@lib/data'
import { Disclosure, Menu, Transition } from '@headlessui/react'

const Navbar = () => {
  const router = useRouter()
  const handlePageChange = (item) => {
    if (item.href === router.pathname) {
      item.current = true
    } else {
      item.current = false
    }
  }

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
                    alt='Workflow'
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
              <MobileMenu open={open} />
              <div className='hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center'>
                <Menu as='div' className='flex-shrink-0 relative ml-4'>
                  <div>
                    <Menu.Button className='bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open user menu</span>
                      <Image
                        className='h-8 w-8 rounded-full'
                        width={32}
                        height={32}
                        src={user.imageUrl}
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none'>
                      {userNavigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'block py-2 px-4 text-sm text-gray-700'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        </Link>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            <nav
              className='hidden lg:py-2 lg:flex lg:space-x-8'
              aria-label='Global'
            >
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
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
          </div>

          <Disclosure.Panel as='nav' className='lg:hidden' aria-label='Global'>
            <div className='pt-2 pb-3 px-2 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md py-2 px-3 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className='border-t border-gray-700 pt-4 pb-3'>
              <div className='px-4 flex items-center'>
                <div className='flex-shrink-0'>
                  <Image
                    className='h-10 w-10 rounded-full'
                    width={40}
                    height={40}
                    src={user.imageUrl}
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-white'>
                    {user.name}
                  </div>
                  <div className='text-sm font-medium text-gray-400'>
                    {user.email}
                  </div>
                </div>
              </div>
              <div className='mt-3 px-2 space-y-1'>
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className='block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  )
}

export default Navbar

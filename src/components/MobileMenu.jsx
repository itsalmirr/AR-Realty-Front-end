import { Disclosure } from '@headlessui/react'
import { MdOutlineClose } from 'react-icons/md'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const MobileMenu = ({ open }) => {
  return (
    <div className='relative z-10 flex items-center lg:hidden'>
      <Disclosure.Button className='rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white'>
        <span className='sr-only'>Open menu</span>
        {open ? (
          <MdOutlineClose className='block h-6 w-6' aria-hidden='true' />
        ) : (
          <HiOutlineMenuAlt4 className='block h-6 w-6' aria-hidden='true' />
        )}
      </Disclosure.Button>
    </div>
  )
}

export const MobileMenuDropDown = ({
  navigation,
  userNavigation,
  user,
  Link,
  links,
  isLoggedIn,
  classNames,
}) => {
  return (
    <Disclosure.Panel as='nav' className='lg:hidden' aria-label='Global'>
      <div className='pt-2 pb-3 px-2 space-y-1'>
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <Disclosure.Button
              as='a'
              href='#'
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md py-2 px-3 text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}>
              {item.name}
            </Disclosure.Button>
          </Link>
        ))}
      </div>
      {isLoggedIn ? (
        <div className='border-t border-gray-700 pt-4 pb-3'>
          <div className='px-4 flex items-center'>
            <div className='flex-shrink-0'>
              <img
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
                className='block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'>
                {item.name}
              </Disclosure.Button>
            ))}
          </div>
        </div>
      ) : (
        <div className='border-t border-gray-700 pt-4 pb-3'>
          <Link href={links.login}>
            <Disclosure.Button
              as='a'
              href='#'
              className='block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'>
              Login
            </Disclosure.Button>
          </Link>
        </div>
      )}
    </Disclosure.Panel>
  )
}

export default MobileMenu

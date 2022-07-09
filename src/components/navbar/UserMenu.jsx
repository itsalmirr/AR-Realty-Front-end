import { Menu, Transition } from '@headlessui/react'

const UserMenu = ({
  userNavigation,
  user,
  classNames,
  logoutUser,
  Link,
  Fragment,
}) => {
  return (
    <Menu as='div' className='flex-shrink-0 relative ml-4'>
      <div>
        <Menu.Button className='bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
          <span className='sr-only'>Open user menu</span>
          <img
            className='h-8 w-8 rounded-full'
            src={user.avatar ? user.avatar : user.default_avatar}
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
        leaveTo='transform opacity-0 scale-95'>
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none'>
          {userNavigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    onClick={item.name === 'Sign out' ? logoutUser : null}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block py-2 px-4 text-sm text-gray-700'
                    )}>
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            </Link>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserMenu

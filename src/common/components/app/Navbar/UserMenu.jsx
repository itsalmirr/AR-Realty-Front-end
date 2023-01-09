import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'

const NoAvatar = ({ letter }) => {
  return (
    <span className='inline-flex h-8 w-8 items-center justify-center rounded-md bg-gray-500'>
      <span className='text-xl font-medium leading-none text-white'>
        {letter}
      </span>
    </span>
  )
}

const UserMenu = ({
  userNavigation,
  user,
  classNames,
  logoutUser,
  Link,
  Fragment,
}) => {
  let userAvatar = `https://res.cloudinary.com/iamalmiir/image/upload/v1/${user.avatar}`

  return (
    <Menu as='div' className='flex-shrink-0 relative ml-4'>
      <div>
        <Menu.Button className='bg-gray-800 rounded-md flex text-sm text-white'>
          <span className='sr-only'>Open user menu</span>
          {user.avatar ? (
            <Image
              className='h-8 w-8 rounded-md'
              src={userAvatar}
              alt={user.full_name}
              width={32}
              height={32}
            />
          ) : (
            <NoAvatar letter={user.full_name[0]} />
          )}
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
            <Menu.Item key={item.name}>
              {({ active }) => (
                <Link
                  href={item.href}
                  onClick={item.name === 'Sign out' ? logoutUser : null}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block py-2 px-4 text-sm text-gray-700'
                  )}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default UserMenu

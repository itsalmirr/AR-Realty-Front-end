import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MdOutlineSearch, MdOutlineClose } from 'react-icons/md'
import { HiOutlineMenuAlt4, HiBell } from 'react-icons/hi'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const MobileMenu = ({ open }) => {
  return (
    <div className='relative z-10 flex items-center lg:hidden'>
      {/* Mobile menu button */}
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

export default MobileMenu

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

export default MobileMenu

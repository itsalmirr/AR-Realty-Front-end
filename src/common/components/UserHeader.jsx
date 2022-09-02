import Link from 'next/link'

import { AiTwotoneSetting } from 'react-icons/ai'

const cover = {
  backgroundImage:
    'https://res.cloudinary.com/iamalmiir/image/upload/v1656028617/sean-pollock-PhYq704ffdA-unsplash_1_hfzoyk.jpg',
}

const UserHeader = ({ user }) => {
  return (
    <div>
      <div>
        <div>
          <div>
            <img
              className='h-32 bg-teal-500 w-full object-cover lg:h-48'
              src={cover.backgroundImage}
              alt=''
            />
          </div>
          <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
              <div className='flex'>
                <img
                  className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
                  src={user.avatar ? user.avatar : user.default_avatar}
                  alt=''
                />
              </div>
              <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                <div className='sm:hidden md:block mt-6 min-w-0 flex-1'>
                  <h1 className='text-2xl font-bold text-gray-900 truncate'>
                    {user.full_name}
                  </h1>
                </div>
                <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
                  <Link href='/account/settings/'>
                    <button
                      type='button'
                      className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'>
                      <AiTwotoneSetting
                        className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span>Settings</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='hidden sm:block md:hidden mt-6 min-w-0 flex-1'>
              <h1 className='text-2xl font-bold text-gray-900 truncate'>
                {user.full_name}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHeader

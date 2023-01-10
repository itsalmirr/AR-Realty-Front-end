import { MdPool, MdLocationPin } from 'react-icons/md'
import { GiTennisCourt, GiGardeningShears } from 'react-icons/gi'

import { formatPrice, classNames } from '@lib/helpers'

const BasicInfo = ({ listing }) => {
  return (
    <div className='mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0'>
      <h1 className='text-3xl font-extralight tracking-tight dark:text-textColor-100 text-gray-900'>
        {listing.title}
      </h1>

      <div className='mt-3'>
        <h2 className='sr-only'>Listing information</h2>
        <p className='text-3xl font-extrabold dark:text-textColor-100 text-gray-900'>
          {formatPrice(listing.price)}
        </p>
      </div>
      <section aria-labelledby='details-heading' className='mt-12'>
        <h2 id='details-heading' className='sr-only'>
          Additional details
        </h2>
        <div className='relative group p-6'>
          <div className='flex items-center dark:text-textColor-100'>
            <span className={classNames('rounded-lg inline-flex p-3')}>
              <MdLocationPin className='h-6 w-6' aria-hidden='true' />
            </span>
            <address className='ml-4 text-gray-900 dark:text-textColor-100 font-bold'>
              {listing.address}, {listing.city}, {listing.state},{' '}
              {listing.zipcode}
            </address>
          </div>
          {listing.pool && (
            <div className='flex items-center dark:text-textColor-100'>
              <span className={classNames('rounded-lg inline-flex p-3')}>
                <MdPool className='h-6 w-6' aria-hidden='true' />
              </span>
              <span className='ml-4 text-gray-900 dark:text-textColor-100 font-bold'>
                Pool 10 x 20
              </span>
            </div>
          )}
          <div className='flex items-center dark:text-textColor-100'>
            <span className={classNames('rounded-lg inline-flex p-3')}>
              <GiTennisCourt className='h-6 w-6' aria-hidden='true' />
            </span>
            <span className='ml-4 text-gray-900 dark:text-textColor-100 font-bold'>
              Tennis court
            </span>
          </div>
          <div className='flex items-center dark:text-textColor-100'>
            <span className={classNames('rounded-lg inline-flex p-3')}>
              <GiGardeningShears className='h-6 w-6' aria-hidden='true' />
            </span>
            <span className='ml-4 text-gray-900 dark:text-textColor-100 font-bold'>
              Garden
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BasicInfo

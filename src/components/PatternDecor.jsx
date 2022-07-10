import { Fragment } from 'react'
import { FaPhone, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export const RelatorDescriptionDecor = () => {
  return (
    <Fragment>
      <svg
        className='absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden'
        width={784}
        height={404}
        fill='none'
        viewBox='0 0 784 404'
        aria-hidden='true'>
        <defs>
          <pattern
            id='e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32'
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits='userSpaceOnUse'>
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className='text-primaryDark'
              fill='currentColor'
            />
          </pattern>
        </defs>
        <rect
          width={784}
          height={404}
          fill='url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)'
        />
      </svg>

      <svg
        className='hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2'
        width={404}
        height={784}
        fill='none'
        viewBox='0 0 404 784'
        aria-hidden='true'>
        <defs>
          <pattern
            id='56409614-3d62-4985-9a10-7ca758a8f4f0'
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits='userSpaceOnUse'>
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className='text-primaryDark'
              fill='currentColor'
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={784}
          fill='url(#56409614-3d62-4985-9a10-7ca758a8f4f0)'
        />
      </svg>
    </Fragment>
  )
}

export const ContactFormDecor = () => {
  return (
    <div className='relative overflow-hidden py-10 px-6 bg-gradient-to-b from-primaryLight to-primaryDark sm:px-10 xl:p-12'>
      {/* Decorative angle backgrounds */}
      <div
        className='absolute inset-0 pointer-events-none sm:hidden'
        aria-hidden='true'>
        <svg
          className='absolute inset-0 w-full h-full'
          width={343}
          height={388}
          viewBox='0 0 343 388'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
            fill='url(#linear1)'
            fillOpacity='.1'
          />
          <defs>
            <linearGradient
              id='linear1'
              x1='254.553'
              y1='107.554'
              x2='961.66'
              y2='814.66'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#fff' />
              <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
        aria-hidden='true'>
        <svg
          className='absolute inset-0 w-full h-full'
          width={359}
          height={339}
          viewBox='0 0 359 339'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
            fill='url(#linear2)'
            fillOpacity='.1'
          />
          <defs>
            <linearGradient
              id='linear2'
              x1='192.553'
              y1='28.553'
              x2='899.66'
              y2='735.66'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#fff' />
              <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
        aria-hidden='true'>
        <svg
          className='absolute inset-0 w-full h-full'
          width={160}
          height={678}
          viewBox='0 0 160 678'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
            fill='url(#linear3)'
            fillOpacity='.1'
          />
          <defs>
            <linearGradient
              id='linear3'
              x1='192.553'
              y1='325.553'
              x2='899.66'
              y2='1032.66'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#fff' />
              <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h3 className='text-lg font-medium text-white'>Contact information</h3>
      <p className='mt-6 text-base text-teal-50 max-w-3xl'>
        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa
        dictumst amet. Sapien tortor lacus arcu.
      </p>
      <dl className='mt-8 space-y-6'>
        <dt>
          <span className='sr-only'>Phone number</span>
        </dt>
        <dd className='flex text-base text-cyan-50'>
          <FaPhone
            className='flex-shrink-0 w-6 h-6 text-cyan-200'
            aria-hidden='true'
          />
          <span className='ml-3'>+1 (555) 123-4567</span>
        </dd>
        <dt>
          <span className='sr-only'>Email</span>
        </dt>
        <dd className='flex text-base text-cyan-50'>
          <HiMail
            className='flex-shrink-0 w-6 h-6 text-cyan-200'
            aria-hidden='true'
          />
          <span className='ml-3'>support@ar.com</span>
        </dd>
      </dl>
      <ul role='list' className='mt-8 flex space-x-12'>
        <li>
          <a className='text-cyan-200 hover:text-cyan-100' href='#'>
            <span className='sr-only'>Instagram</span>
            <FaInstagram
              className='w-7 h-7'
              aria-hidden='true'
              fill='currentColor'
            />
          </a>
        </li>
        <li>
          <a className='text-cyan-200 hover:text-cyan-100' href='#'>
            <span className='sr-only'>GitHub</span>
            <FaGithub
              className='w-7 h-7'
              aria-hidden='true'
              fill='currentColor'
            />
          </a>
        </li>
        <li>
          <a className='text-cyan-200 hover:text-cyan-100' href='#'>
            <span className='sr-only'>Twitter</span>
            <FaTwitter
              className='w-7 h-7'
              aria-hidden='true'
              fill='currentColor'
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export const ContactFormDotDecor = () => {
  return (
    <svg
      className='absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72'
      width={404}
      height={384}
      fill='none'
      viewBox='0 0 404 384'
      aria-hidden='true'>
      <defs>
        <pattern
          id='64e643ad-2176-4f86-b3d7-f2c5da3b6a6d'
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits='userSpaceOnUse'>
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className='text-warm-gray-200'
            fill='#0077b6'
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={384}
        fill='url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)'
      />
    </svg>
  )
}

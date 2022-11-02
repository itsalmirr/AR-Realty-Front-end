import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import { PER_PAGE } from '@lib/constants'

const Pagination = ({ currentPage, nextPage, prevPage, total }) => {
  const lastPage = Math.ceil(total / PER_PAGE)

  return (
    <nav
      data-aos='fade-up'
      className='border-t mx-8 my-32 border-gray-200 px-4 flex items-center justify-between sm:px-0'
    >
      <div className='-mt-px w-0 flex-1 flex'>
        {prevPage && (
          <Link
            href={`?page=${currentPage - 1}`}
            className='border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'
          >
            <FaArrowLeft
              className='mr-3 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
            Previous
          </Link>
        )}
      </div>
      <div className='hidden md:-mt-px md:flex'>
        {Array.from({ length: lastPage }, (_, i) => (
          <Link
            href={`?page=${i + 1}`}
            key={i}
            className={`${
              currentPage === i + 1
                ? 'border-primaryDark text-primaryDark '
                : ''
            } border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <div className='-mt-px w-0 flex-1 flex justify-end'>
        {nextPage && (
          <Link
            href={`?page=${currentPage + 1}`}
            className='border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300'
          >
            Next
            <FaArrowRight
              className='ml-3 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Pagination

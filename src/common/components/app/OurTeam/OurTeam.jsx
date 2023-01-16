import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

import { fetchRealtors } from '@common/queries/realtor'
import { Spinner } from '@common/components/app/Spinner'
import { ServerError } from '@common/components/app/Error'

const OurTeam = () => {
  const [loading, setLoading] = useState(true)
  const [realtors, setRealtors] = useState([])
  const { data } = useSWR('/api/realtor/realtors', fetchRealtors)

  useEffect(() => {
    if (data && data.success === true) {
      const { results } = data.resData || []
      setRealtors(results)
    }
    setLoading(false)
  }, [data])

  return (
    <div className='mx-auto shadow-lg dark:shadow-black mb-12 max-w-7xl px-4 text-center sm:px-6 lg:px-8 lg:py-12'>
      <div className='space-y-8 sm:space-y-12'>
        <div className='space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl'>
          <h2 className='dark:text-textColor-200 text-3xl font-bold tracking-tight sm:text-4xl'>
            Our Team
          </h2>
          <p className='text-xl dark:text-textColor-100 text-gray-500'>
            Our team of realtors are here to help you find your dream home.
          </p>
          {loading && <Spinner />}
          {data && data.success === false && <ServerError />}
        </div>
        <ul className='mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:max-w-5xl lg:grid-cols-3'>
          {realtors.map((realtor) => (
            <li key={realtor.full_name}>
              <div className='space-y-4'>
                <Image
                  className='mx-auto h-20 w-20 rounded-full lg:h-24 lg:w-24'
                  src={realtor.photo}
                  alt={realtor.full_name}
                  width={80}
                  height={80}
                  quality={100}
                />
                <div className='space-y-2'>
                  <div className='text-xs font-medium lg:text-sm'>
                    <Link
                      href={`/realtors/${realtor.slug}`}
                      className='hover:underline'
                    >
                      {realtor.full_name}
                    </Link>
                    <p className='dark:text-primary-dark text-primary-light'>
                      Realtor
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default OurTeam

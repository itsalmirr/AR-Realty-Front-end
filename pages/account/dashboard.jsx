import useSWR from 'swr'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useContext, useState, useEffect } from 'react'

import AuthContext from '@context/AuthContext'
import { links } from '@lib/constants'
import {
  Layout,
  UserHeader,
  Spinner,
  Divider,
  RequestedInquiries,
} from '@components/index'

const DashboardPage = () => {
  const { isLoading, user, setIsLoading } = useContext(AuthContext)
  const [listings, setListings] = useState([])
  const fetcher = (url) => axios.get(url).then((res) => res.data)

  const { data, error } = useSWR('/api/auth/dashboard', fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 20000,
  })

  useEffect(() => {
    data === undefined ? setIsLoading(true) : setListings(data.resData)
    if (error) {
      setIsLoading(false)
      toast.error('Something went wrong. Please try refreshing the page.')
    }

    data && data.resData && setIsLoading(false)
  }, [listings, data, error])

  return (
    <Layout title='Dashboard'>
      <header>
        {!isLoading && user ? <UserHeader user={user} /> : <Spinner />}
      </header>
      <div className='container mx-auto sm:px-6 lg:px-8 mt-12'>
        <Divider text='Your Inquiries' />
        {listings.length > 0 && !isLoading && (
          <RequestedInquiries listings={listings} />
        )}
        {listings.length === 0 && !isLoading && (
          <p className='text-center text-gray-500 text-sm'>
            You have no inquiries.
          </p>
        )}
      </div>
    </Layout>
  )
}

export default DashboardPage

export const getServerSideProps = async (ctx) => {
  try {
    const { access, refresh } = ctx.req.cookies
    if (!access || !refresh) {
      toast.error('You must be logged in to access this page')
      ctx.res.writeHead(302, {
        Location: links.login,
      })
      ctx.res.end()
    }
  } catch (err) {
    toast.error('Something went wrong')
    ctx.res.writeHead(302, {
      Location: links.listings,
    })
    ctx.res.end()
  }

  return {
    props: {},
  }
}

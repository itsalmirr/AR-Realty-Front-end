import { useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import axios from 'axios'

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
  const { isLoading, user } = useContext(AuthContext)
  const [listings, setListings] = useState([])
  const fetcher = (url) => axios.get(url).then((res) => res.data)

  const { data, error } = useSWR('/api/auth/dashboard', fetcher, {
    revalidate: true,
  })

  useEffect(() => {
    data && setListings(data.resData)
    error && toast.error('Something went wrong')
  }, [listings, data, error])

  return (
    <Layout title='Dashboard'>
      <header>
        {!isLoading && user ? <UserHeader user={user} /> : <Spinner />}
      </header>
      <div className='container mx-auto sm:px-6 lg:px-8 mt-12'>
        <Divider text='Your Inquiries' />
        {listings.length > 0 ? (
          <RequestedInquiries listings={listings} />
        ) : (
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

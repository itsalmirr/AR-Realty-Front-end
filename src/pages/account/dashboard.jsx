import dynamic from 'next/dynamic'
import { useContext, useState } from 'react'

import AuthContext from '@context/AuthContext'
import { links } from '@lib/constants'
import { Spinner } from '@components/app/Spinner'
import { Divider } from '@components/app/Divider'
import { DashboardHeader } from '@components/app/Dashboard'
const Layout = dynamic(() => import('@components/layouts/Layout'), {
  loading: () => <Spinner />,
})
const RequestedInquiriesCard = dynamic(
  () => import('@components/app/RequestedInquiriesCard/RequestedInquiriesCard'),
  {
    loading: () => <Spinner />,
  }
)
const AccountSettings = dynamic(
  () => import('@modules/dashboard/AccountSettings'),
  {
    loading: () => <Spinner />,
  }
)

const DashboardPage = () => {
  const { isLoading, user, setIsLoading } = useContext(AuthContext)
  const [listings, setListings] = useState([])
  const [settings, setSettings] = useState(false)

  return (
    <Layout title='Dashboard'>
      <header>
        {!isLoading && user ? (
          <DashboardHeader
            setSettings={setSettings}
            settings={settings}
            user={user}
          />
        ) : (
          <Spinner />
        )}
      </header>
      {settings && (
        <AccountSettings
          user={user}
          settings={settings}
          setSettings={setSettings}
        />
      )}
      <div className='container mx-auto sm:px-6 lg:px-8 mt-12'>
        <Divider text='Your Inquiries' />
        {listings.length > 0 && !isLoading && (
          <RequestedInquiriesCard
            listings={listings}
            setListings={setListings}
            setIsLoading={setIsLoading}
          />
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
      ctx.res.writeHead(302, {
        Location: links.login,
      })
      ctx.res.end()
    }
  } catch (err) {
    ctx.res.writeHead(302, {
      Location: links.listings,
    })
    ctx.res.end()
  }

  return {
    props: {},
  }
}

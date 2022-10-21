import useSWR from 'swr'
import dynamic from 'next/dynamic'
import { toast } from 'react-toastify'
import { useContext, useState, useEffect, useCallback } from 'react'

import AuthContext from '@context/AuthContext'
import { links } from '@lib/constants'
import { Spinner } from '@components/app/Spinner'
import { Divider } from '@components/app/Divider'
import { DashboardHeader } from '@components/app/Dashboard'
import { usersListingsFetcher } from '@queries/fetchlistings'
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
  const [full_name, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { data, error } = useSWR('/api/auth/dashboard', usersListingsFetcher)

  const updateAccount = useCallback(() => {
    user.full_name = full_name
    user.email = email
  }, [full_name, email])

  useEffect(() => {
    setEmail(user?.email)
    setFullName(user?.full_name)
    setUsername(user?.username)
    data && setListings(data.resData)
    if (error !== undefined) {
      setIsLoading(false)
      toast.error('Something went wrong. Please try refreshing the page.')
    }
    setIsLoading(false)
  }, [data, user])

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
      {settings && user && (
        <AccountSettings
          email={email}
          full_name={full_name}
          username={username}
          settings={settings}
          currentPassword={currentPassword}
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          setSettings={setSettings}
          setEmail={setEmail}
          setFullName={setFullName}
          setUsername={setUsername}
          setCurrentPassword={setCurrentPassword}
          setNewPassword={setNewPassword}
          setConfirmPassword={setConfirmPassword}
          updateAccount={updateAccount}
        />
      )}
      <div className='container mx-auto sm:px-6 lg:px-8 mt-12'>
        <Divider text='Your Inquiries' />
        {listings.length > 0 ? (
          <RequestedInquiriesCard listings={listings} />
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

import useSWR from 'swr'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useContext, useState, useEffect, useCallback } from 'react'

import AuthContext from '@context/AuthContext'
import { links } from '@lib/constants'
import { Spinner } from '@components/app/Spinner'
import { Divider } from '@components/app/Divider'
import { fetchUserListings } from '@common/queries/listings'
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
  const [userInquiries, setUserInquiries] = useState([])
  const [settings, setSettings] = useState(false)
  const [full_name, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { data } = useSWR('/api/auth/dashboard', fetchUserListings)

  const updateAccount = useCallback(() => {
    user.full_name = full_name
    user.email = email
  }, [full_name, email])

  const updateInquiries = useCallback(() => {
    setUserInquiries(data.resData)
  }, [data])

  useEffect(() => {
    setEmail(user?.email)
    setFullName(user?.full_name)
    setUsername(user?.username)
    if (data) {
      setUserInquiries(data.resData)
    }
    setIsLoading(false)
  }, [data, user, userInquiries])

  if (!user || !userInquiries || isLoading) return <Spinner />

  return (
    <Layout title='Dashboard'>
      <header>
        <DashboardHeader
          setSettings={setSettings}
          settings={settings}
          user={user}
        />
      </header>
      {settings && (
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
        <RequestedInquiriesCard
          inquiries={userInquiries}
          refreshInquiries={updateInquiries}
        />
        {userInquiries.length === 0 && !isLoading && (
          <div className='flex flex-col items-center justify-center mt-12'>
            <p className='text-center text-gray-500 text-sm'>
              You have no inquiries.
            </p>
            <p className='text-center text-gray-500 text-sm'>
              You can browse our listings and request an inquiry.
            </p>

            <Link href={links.listings}>
              <button className='mt-4 bg-primaryDark hover:bg-accentDark text-white font-bold py-2 px-4 rounded'>
                Browse Listings
              </button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default DashboardPage

export const getServerSideProps = async (ctx) => {
  try {
    const { access, refresh } = ctx.req.cookies
    if (access === 'undefined' || refresh === 'undefined') {
      if (!access || !refresh) {
        ctx.res.writeHead(302, {
          Location: links.login,
        })
        ctx.res.end()
      }
    }
  } catch (err) {
    ctx.res.writeHead(302, {
      Location: links.login,
    })
    ctx.res.end()
  }

  return {
    props: {},
  }
}

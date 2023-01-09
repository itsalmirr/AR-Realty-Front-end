import dynamic from 'next/dynamic'
import { useContext, useState, useEffect, useCallback } from 'react'

import AuthContext from '@context/AuthContext'
import { links } from '@lib/constants'
import { Spinner } from '@components/app/Spinner'
import { Divider } from '@components/app/Divider'
import { DashboardHeader } from '@components/app/Dashboard'
const Layout = dynamic(() => import('@components/layouts/Layout'), {
  loading: () => <Spinner />,
})
const RequestedInquiries = dynamic(
  () => import('@components/app/Forms/RequestedInquiries'),
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
  const [settings, setSettings] = useState(false)
  const [full_name, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [profileImage, setProfileImage] = useState(null)

  const updateAccount = useCallback(() => {
    user.full_name = full_name
    user.email = email
    user.avatar = profileImage
  }, [full_name, email])

  useEffect(() => {
    setEmail(user?.email)
    setFullName(user?.full_name)
    setUsername(user?.username)
    setProfileImage(user?.avatar)
    setIsLoading(false)
  }, [user])

  if (!user || isLoading) return <Spinner />

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
          profileImage={profileImage}
          settings={settings}
          currentPassword={currentPassword}
          newPassword={newPassword}
          confirmPassword={confirmPassword}
          setSettings={setSettings}
          setEmail={setEmail}
          setFullName={setFullName}
          setUsername={setUsername}
          setProfileImage={setProfileImage}
          setCurrentPassword={setCurrentPassword}
          setNewPassword={setNewPassword}
          setConfirmPassword={setConfirmPassword}
          updateAccount={updateAccount}
        />
      )}
      <div className='container mx-auto sm:px-6 lg:px-8 mt-12'>
        <Divider text='Your Inquiries' />
        <RequestedInquiries links={links} />
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

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
  const { user } = useContext(AuthContext)
  const [settings, setSettings] = useState(false)

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
        <AccountSettings settings={settings} setSettings={setSettings} />
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

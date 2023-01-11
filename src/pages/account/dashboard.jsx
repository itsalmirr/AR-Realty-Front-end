import dynamic from 'next/dynamic'

import { links } from '@lib/constants'
import { Spinner } from '@components/app/Spinner'
import { Divider } from '@components/app/Divider'
import { DashboardHeader } from '@components/app/Dashboard'

const Layout = dynamic(() => import('@components/layouts/Layout'), {
  loading: () => <Spinner />,
})
const RequestedInquiries = dynamic(
  () => import('@components/app/RequestedInquiriesCard/RequestedInquiriesCard'),
  {
    loading: () => <Spinner />,
  }
)

const DashboardPage = () => {
  return (
    <Layout title='Dashboard'>
      <header>
        <DashboardHeader />
      </header>
      <div className='container mx-auto sm:px-6 lg:px-8 mt-12'>
        <Divider text='Your Inquiries' />
        <RequestedInquiries links={links} />
      </div>
    </Layout>
  )
}

export default DashboardPage

export const getServerSideProps = async ({ req, res }) => {
  const { access, refresh } = req.cookies

  if (!access || !refresh) {
    res.writeHead(302, {
      Location: links.login,
    })
    res.end()
  }

  return {
    props: {},
  }
}

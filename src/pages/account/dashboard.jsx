import dynamic from 'next/dynamic'

import { links } from '@lib/constants'
import { Spinner } from '@components/app/Spinner'
import { Dashboard } from '@modules/dashboard'

const Layout = dynamic(() => import('@components/layouts/Layout'), {
  loading: () => <Spinner />,
})

const DashboardPage = () => (
  <Layout title='Dashboard'>
    <Dashboard />
  </Layout>
)

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

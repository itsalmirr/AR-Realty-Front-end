import { useContext } from 'react'

import AuthContext from '@context/AuthContext'
import { links } from '@lib/constants'
import { Layout, UserDashboard } from '@components/index'

const DashboardPage = () => {
  const { isLoading, user } = useContext(AuthContext)

  return (
    <Layout title='DashboardPage'>
      <UserDashboard isLoading={isLoading} user={user} />
    </Layout>
  )
}

export default DashboardPage

export const getServerSideProps = (ctx) => {
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

import { useContext } from 'react'

import AuthContext from '@context/AuthContext'
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

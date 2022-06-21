import { useContext } from 'react'

import { UserHeader, Spinner } from '@components/index'
import AuthContext from '@context/AuthContext'

const UserDashboard = () => {
  const { isLoading, user } = useContext(AuthContext)
  return (
    <div>
      <header>
        {!isLoading && user ? <UserHeader user={user} /> : <Spinner />}
      </header>
    </div>
  )
}

export default UserDashboard

import { UserHeader } from '@components/index'
import { Fragment, useContext } from 'react'
import AuthContext from '@context/AuthContext'

const UserDashboard = () => {
  const { isLoading, user } = useContext(AuthContext)

  return (
    <div>
      <header>
        <UserHeader isLoading={isLoading} user={user} />
      </header>
    </div>
  )
}

export default UserDashboard

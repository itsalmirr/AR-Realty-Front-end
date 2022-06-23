import { UserHeader, Spinner } from '@components/index'

const UserDashboard = ({ isLoading, user }) => {
  return (
    <div>
      <header>
        {!isLoading && user ? <UserHeader user={user} /> : <Spinner />}
      </header>
    </div>
  )
}

export default UserDashboard

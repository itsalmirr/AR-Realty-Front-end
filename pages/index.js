import { useContext } from 'react'
import Layout from '@components/Layout'
import AuthContext from '@context/AuthContext'

const Home = () => {
  const { isLoggedIn, logoutUser, isLoading } = useContext(AuthContext)

  return (
    <Layout title={'Home'}>
      <section>
        <h1>Hello world!</h1>
        {isLoading ? <p>Loading....</p> : null}
        {!isLoading && isLoggedIn ? (
          <button onClick={logoutUser}>Logout</button>
        ) : (
          <button>Login</button>
        )}
      </section>
    </Layout>
  )
}

export default Home

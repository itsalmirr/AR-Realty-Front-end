import Layout from '@components/Layout'
import { useContext, useEffect } from 'react'
import useSWR from 'swr'
import AuthContext from '@context/AuthContext'

const Home = () => {
  const { isLoggedIn, logoutUser, getUser } = useContext(AuthContext)

  return (
    <Layout title={'Home'}>
      <section>
        <h1>Hello world!</h1>
        {isLoggedIn ? <p>You are logged in</p> : <p>You are not logged in</p>}
      </section>

      <button onClick={logoutUser}>Logout</button>
    </Layout>
  )
}

export default Home
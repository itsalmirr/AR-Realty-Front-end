import dynamic from 'next/dynamic'
import { useContext } from 'react'
import Layout from '@components/Layout'
import AuthContext from '@context/AuthContext'

const Home = () => {
  const { user, logoutUser } = useContext(AuthContext)

  return (
    <Layout title={'Home'}>
      <section>
        <h1>Hello world!</h1>
        {user ? <p>You are logged in</p> : <p>You are not logged in</p>}
      </section>

      <button onClick={logoutUser}>Logout</button>
    </Layout>
  )
}

export default Home

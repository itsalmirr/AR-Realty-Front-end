import { useContext } from 'react'
import MainSection from '@components/MainSection'
import Layout from '@components/Layout'
import AuthContext from '@context/AuthContext'

const Home = () => {
  const { isLoggedIn, logoutUser, isLoading } = useContext(AuthContext)

  return (
    <Layout title={'Home'}>
      <MainSection />
    </Layout>
  )
}

export default Home

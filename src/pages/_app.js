import '../styles/dist.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@fontsource/montserrat'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { AuthProvider } from '@context/AuthContext'
import { Layout } from '@components/layouts'
import { useRouter } from 'next/router'
import { pageTitles } from '@common/lib/constants'

const AOS = dynamic(() => import('@components/app/CustomAOS/CustomAOS'))

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  const currentPath = (path) => {
    return path.href === router.pathname
  }

  const titleMessage = `${pageTitles.find(currentPath).name} | AR Realty`

  return (
    <ThemeProvider attribute='class' enableSystem>
      <AOS />
      <AuthProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Layout title={titleMessage}>
          <Component {...pageProps} />
        </Layout>
        <Analytics />
      </AuthProvider>
    </ThemeProvider>
  )
}
export default MyApp

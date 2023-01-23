import '../styles/dist.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import '@fontsource/montserrat'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { AuthProvider } from '@context/AuthContext'

const AOS = dynamic(() => import('@components/app/CustomAOS/CustomAOS'))

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute='class' enableSystem>
    <AOS />
    <AuthProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Analytics />
    </AuthProvider>
  </ThemeProvider>
)

export default MyApp

import '../styles/globals.css'
import '@fontsource/montserrat'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'
import { SessionProvider } from 'next-auth/react'

import { AuthProvider } from '@context/AuthContext'
import { ListingsProvider } from '@context/ListingsContext'
const AOS = dynamic(() => import('@components/CustomAOS'))

const MyApp = ({ Component, pageProps, session }) => {
  return (
    <Fragment>
      <AOS />
      <SessionProvider session={session}>
        <AuthProvider>
          <ListingsProvider>
            <Component {...pageProps} />
          </ListingsProvider>
        </AuthProvider>
      </SessionProvider>
    </Fragment>
  )
}

export default MyApp

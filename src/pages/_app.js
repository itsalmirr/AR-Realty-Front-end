import '../styles/globals.css'
import '@fontsource/montserrat'
import dynamic from 'next/dynamic'
import { Fragment } from 'react'

import { AuthProvider } from '@context/AuthContext'
import { ListingsProvider } from '@context/ListingsContext'
const AOS = dynamic(() => import('@components/CustomAOS'))

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <AOS />
      <AuthProvider>
        <ListingsProvider>
          <Component {...pageProps} />
        </ListingsProvider>
      </AuthProvider>
    </Fragment>
  )
}

export default MyApp

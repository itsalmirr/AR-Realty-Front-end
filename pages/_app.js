import '../styles/globals.css'
import '@fontsource/montserrat'
import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css'
import { Fragment, useEffect } from 'react'
import AOS from 'aos'
import { AuthProvider } from '@context/AuthContext'
import { ToastContainer, Flip } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      mirror: true,
      delay: 100,
      offset: 100,
    })
  }, [])

  return (
    <Fragment>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={3}
        transition={Flip}
        theme='colored'
      />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Fragment>
  )
}

export default MyApp

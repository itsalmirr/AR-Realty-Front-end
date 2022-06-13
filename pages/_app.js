import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import { Fragment } from 'react'
import { ToastContainer, Flip } from 'react-toastify'

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp

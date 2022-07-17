import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css'

import AOS from 'aos'
import { useEffect } from 'react'
import { ToastContainer, Flip } from 'react-toastify'

const CustomAOS = () => {
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
  )
}

export default CustomAOS

import 'aos/dist/aos.css'
import 'react-toastify/dist/ReactToastify.css'

import AOS from 'aos'
import { useEffect } from 'react'
import { ToastContainer, Flip } from 'react-toastify'

const CustomAOS = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-in-out',
      mirror: true,
      delay: 100,
      offset: 100,
    })
  }, [])
  return (
    <ToastContainer
      position='top-right'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      draggable
      pauseOnHover={false}
      limit={2}
      transition={Flip}
      theme='colored'
    />
  )
}

export default CustomAOS

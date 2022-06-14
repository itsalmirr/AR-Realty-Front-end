import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const registerUser = async (e) => {
    e.preventDefault()

    const body = {
      email: e.target.email.value,
      full_name: e.target.full_name.value,
      user_name: e.target.user_name.value,
      password: e.target.password.value,
    }

    try {
      const res = await axios.post('/api/auth/register', body)

      if (res.data.success) {
        toast.success('Nice! You are now registered.')
        router.push('/account/dashboard')
      }
    } catch (err) {
      toast.error(
        'Registration failed - make sure you filled out all fields correctly'
      )
    }
  }

  const loginUser = async (e) => {
    e.preventDefault()
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    try {
      const res = await axios.post('/api/auth/login', body)
      if (res.data.success) {
        router.push('/account/dashboard')
        toast.success('Login successful')
      }
    } catch (err) {
      toast.error('Login failed - check your email and password')
    }
  }

  const logoutUser = async (e) => {
    e.preventDefault()
    const res = await axios.get('http://localhost:3000/api/auth/logout')
    if (res.data.success) {
      router.push('/')
      toast.success('Logout successful')
    }
  }

  const getUser = async () => {
    // use fetch
    const res = await axios.get("http://localhost:3000/api/auth/user")
    if (res.data) {
      // setUser(res.data)
      setIsLoggedIn(true)
    }
    return data
  }


  useEffect(() => {
    getUser()
  }
  , [])


  const contextData = {
    loginUser: loginUser,
    registerUser: registerUser,
    logoutUser: logoutUser,
    getUser: getUser,
    isLoggedIn: isLoggedIn,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

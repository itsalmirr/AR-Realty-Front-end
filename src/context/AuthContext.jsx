import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkUserLoggedIn()
  }, [])

  const registerUser = async (e) => {
    e.preventDefault()
    const body = {
      email: e.target.email.value,
      full_name: e.target.full_name.value,
      user_name: e.target.user_name.value,
      password: e.target.password.value,
    }

    try {
      setIsLoading(true)
      const res = await axios.post('/api/auth/register', body)
      if (res.data.success) {
        toast.success('Nice! You are now registered.')
        router.push('/user/login')
      }
      setIsLoading(false)
    } catch (err) {
      toast.error(
        'Registration failed - make sure you filled out all fields correctly'
      )
      setIsLoading(false)
    }
  }

  const loginUser = async (e) => {
    e.preventDefault()
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    try {
      setIsLoading(true)
      const res = await axios.post('/api/auth/login', body)
      if (res.data.success) {
        setUser(res.data.user)
        setIsLoggedIn(true)
        toast.success(res.data.message)
        router.push('/')
      }
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      toast.error('Login failed - check your email and password')
    }
  }

  const logoutUser = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const res = await axios.get('/api/auth/logout')
      if (res.data.success) {
        router.push('/')
        setUser(null)
        setIsLoggedIn(false)
        toast.success('Logout successful')
      }
      setIsLoading(false)
    } catch (err) {
      toast.error('Logout failed')
      setIsLoading(false)
    }
  }

  const checkUserLoggedIn = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get('/api/auth/user')
      if (res.data.success) {
        setUser(res.data.user)
        setIsLoggedIn(true)
      }
      setIsLoading(false)
    } catch (err) {
      setUser(null)
      setIsLoggedIn(false)
    }
  }

  const contextData = {
    loginUser: loginUser,
    registerUser: registerUser,
    logoutUser: logoutUser,
    user: user,
    isLoggedIn: isLoggedIn,
    isLoading: isLoading,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

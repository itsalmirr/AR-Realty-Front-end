import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      checkUserLoggedIn()
    }
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
        setIsLoading(false)
        toast.success('Nice! You are now registered.')
        router.push('/user/login')
      }
    } catch (err) {
      setIsLoading(false)
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
      setIsLoading(true)
      const res = await axios.post('/api/auth/login', body)
      if (res.data.success) {
        setUser(res.data)
        setIsLoggedIn(true)
        router.push('/account/dashboard')
        toast.success('Login successful')
        setIsLoading(false)
      }
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
        setUser(null)
        setIsLoggedIn(false)
        router.push('/')
        toast.success('Logout successful')
        setIsLoading(false)
      }
    } catch (err) {
      setIsLoading(false)
      toast.error('Logout failed')
    }
  }

  const checkUserLoggedIn = async () => {
    try {
      const res = await axios.get('/api/auth/user')
      if (res.data.success) {
        setUser(res.data)
        setIsLoggedIn(true)
      }

      if (res.data.error) {
        setIsLoggedIn(false)
      }
    } catch (err) {
      setIsLoggedIn(false)
      setUser(null)
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

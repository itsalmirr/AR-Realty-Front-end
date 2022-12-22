import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

import { logMeOut, getMe } from '@common/queries/auth'
import { postRequest } from '@lib/requests'

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
      username: e.target.username.value,
      password: e.target.password.value,
    }

    setIsLoading(true)
    try {
      const data = await postRequest('/api/auth/register/', body)

      if (data.success) {
        toast.success(data.message)
        router.push('/auth/login')
      }
    } catch (err) {
      toast.error(err.message)
    }
    setIsLoading(false)
  }

  const loginUser = async (e) => {
    e.preventDefault()
    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    try {
      setIsLoading(true)
      const data = await postRequest('/api/auth/login', body)
      if (data.success) {
        setUser(data.resData)
        setIsLoggedIn(true)
        toast.success(data.message)
        router.push('/account/dashboard')
      }
    } catch (err) {
      toast.error('Login failed - check your credentials')
    }
    setIsLoading(false)
  }

  const logoutUser = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      await logMeOut()
      setUser(null)
      setIsLoggedIn(false)
      router.pathname === '/account/dashboard' && router.push('/')
      toast.success('Logout successful')
    } catch (err) {
      toast.error('Logout failed')
    }
    setIsLoading(false)
  }

  const checkUserLoggedIn = async () => {
    try {
      setIsLoading(true)
      const data = await getMe()
      if (data.resData.id) {
        setUser(data.resData)
        setIsLoggedIn(true)
      }
    } catch (err) {
      setIsLoggedIn(false)
    }
    setIsLoading(false)
  }

  const contextData = {
    loginUser: loginUser,
    registerUser: registerUser,
    logoutUser: logoutUser,
    user: user,
    isLoggedIn: isLoggedIn,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

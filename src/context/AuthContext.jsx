import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import axios from 'axios'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
  const router = useRouter()

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

  const contextData = {
    loginUser: loginUser,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

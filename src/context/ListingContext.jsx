import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

import { API_URL } from '@lib/index'

const ListingsContext = createContext()

export default ListingsContext

export const ListingsProvider = ({ children }) => {
  const url = `${API_URL}/api/properties?limit=6`
  const [listings, setListings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [prev, setPrev] = useState('')
  const [next, setNext] = useState(next)

  const getListings = async () => {
    try {
      const res = await axios.get(url)
    } catch (err) {
      toast.error(err.message)
    }
  }

  const contextData = {}

  return (
    <ListingsContext.Provider value={contextData}>
      {children}
    </ListingsContext.Provider>
  )
}

import axios from 'axios'
import { toast } from 'react-toastify'
import { createContext, useEffect, useState } from 'react'

const ListingsContext = createContext()

export default ListingsContext

export const ListingsProvider = ({ children }) => {
  const [listings, setListings] = useState([])
  const [next, setNext] = useState(null)
  const [prev, setPrev] = useState(null)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getListings()
  }, [page])

  const getListings = async () => {
    try {
      const res = await axios.get(`/api/listings/?limit=6&page=${page}`)

      const { results, count, next: nextPage, previous } = res.data.user
      setTotal(count)
      setListings(results)
      setNext(nextPage ? nextPage : null)
      setPrev(previous ? previous : null)
    } catch (err) {
      toast.error('Error fetching listings')
    }
  }

  const contextData = {
    listings: listings,
    next: next,
    prev: prev,
    total: total,
    page: page,
    setPage: setPage,
  }

  return (
    <ListingsContext.Provider value={contextData}>
      {children}
    </ListingsContext.Provider>
  )
}

import axios from 'axios'
import { toast } from 'react-toastify'
import { createContext, useEffect, useState } from 'react'

const ListingsContext = createContext()

export default ListingsContext

export const ListingsProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [listings, setListings] = useState([])
  const [listing, setListing] = useState({})
  const [next, setNext] = useState(null)
  const [prev, setPrev] = useState(null)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    getListings()
  }, [page])

  const getListings = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/listings/?limit=6&page=${page}`)
      const { results, count, next: nextPage, previous } = data.resData
      setTotal(count)
      setListings(results)
      setNext(nextPage)
      setPrev(previous)
    } catch (err) {
      toast.error('Error fetching listings')
    }
    setLoading(false)
  }

  const fetchListingBySlug = async (slug) => {
    try {
      setLoading(true)
      const { data } = await axios.get(`/api/listing?slug=${slug}`)
      setListing(data.resData)
    } catch (err) {
      toast.error('Error fetching listing')
    }
    setLoading(false)
  }

  const contextData = {
    loading: loading,
    listings: listings,
    next: next,
    prev: prev,
    total: total,
    page: page,
    setPage: setPage,
    listing: listing,
    fetchListingBySlug: fetchListingBySlug,
  }

  return (
    <ListingsContext.Provider value={contextData}>
      {children}
    </ListingsContext.Provider>
  )
}

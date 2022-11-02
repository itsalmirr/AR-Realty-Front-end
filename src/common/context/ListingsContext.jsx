import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

const ListingsContext = createContext()

export default ListingsContext

export const ListingsProvider = ({ children }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [listings, setListings] = useState([])
  const [listing, setListing] = useState({})
  const [next, setNext] = useState(null)
  const [prev, setPrev] = useState(null)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    let currentPage = router.query.page ? parseInt(router.query.page) : 1
    setPage(currentPage)
    getListings(currentPage)
  }, [router.query.page])

  const getListings = async (currentPage) => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `/api/listings/?page_size=6&page=${currentPage}`
      )
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

  const handleInquirySubmit = async (formData, setFormState) => {
    try {
      const { data } = await axios.post(`/api/inquiries`, {
        ...formData,
      })
      data.success && toast.success(data.message)
      setFormState({
        listing: '',
        name: '',
        email: '',
        message: '',
        phone: '',
      })
    } catch (err) {
      toast.error(
        'Opps! Something went wrong. Maybe you already made an inquiry?'
      )
    }
  }

  const checkInquiryMade = async (listingId) => {
    try {
      const { data } = await axios.get(`/api/inquiries?listing=${listingId}`)
      return data.resData
    } catch (err) {
      toast.error('Error fetching inquiry')
    }
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
    handleInquirySubmit: handleInquirySubmit,
    checkInquiryMade: checkInquiryMade,
  }

  return (
    <ListingsContext.Provider value={contextData}>
      {children}
    </ListingsContext.Provider>
  )
}

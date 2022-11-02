import axios from 'axios'

export const fetchListings = async (url, params) => {
  const { data } = await axios.get(url, { params })
  return data
}

export const usersListingsFetcher = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      Inquiries: 'true',
    },
  })
  return data
}

export const isInquiryMade = async (url) => {
  const { data } = await axios.get(url)
  return data
}

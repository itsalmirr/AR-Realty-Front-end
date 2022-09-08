import axios from 'axios'

export const fetchListings = async (url, params) => {
  const { data } = await axios.get(url, { params })
  return data
}

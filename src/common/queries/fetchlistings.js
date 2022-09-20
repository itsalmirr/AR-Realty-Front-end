import axios from 'axios'

export const fetchListings = async (url, params) => {
  const { data } = await axios.get(url, { params })
  return data
}

export const usersListingsFetcher = (url) =>
  axios
    .get(url, {
      headers: {
        Inquiries: 'true',
      },
    })
    .then((res) => res.data)

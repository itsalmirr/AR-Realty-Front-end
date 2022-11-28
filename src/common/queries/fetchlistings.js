export const fetchListings = async (url, params) => {
  // const { data } = await axios.get(url, { params })
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  })
  const listings = await res.json()
  return listings
}

export const usersListingsFetcher = async (url) => {
  const res = await fetch(url, {
    headers: {
      Inquiries: 'true',
    },
    method: 'GET',
    redirect: 'follow',
  })
  const listings = await res.json()
  return listings
}

export const isInquiryMade = async (url) => {
  // const { data } = await axios.get(url)
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  })
  const data = await res.json()
  return data
}

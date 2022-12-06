export const fetchListings = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  })
  const listings = await res.json()
  return listings
}

export const fetchUserListings = async (url) => {
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
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  })
  const data = await res.json()
  return data
}

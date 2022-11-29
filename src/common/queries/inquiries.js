export const submitInquiry = async (body, url, token) => {
  const res = await fetch(url ? url : '/api/inquiries/', {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  return data
}

export const inquiryExists = async (listingId, url, access, check) => {
  const default_url = `/api/inquiries?listing=${listingId}`
  const res = await fetch(url ? url : default_url, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
      CheckInquiry: check ? check : '',
      ListingId: listingId,
    },
  })
  const resData = await res.json()
  return resData
}

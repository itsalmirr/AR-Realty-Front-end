export const submitListingInquiry = async (data) => {
  const res = await fetch('/api/inquiries/', {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const resData = await res.json()
  return resData
}

export const inquiryExists = async (listingId) => {
  const res = await fetch(`/api/inquiries?listing=${listingId}`, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const resData = await res.json()
  return resData
}

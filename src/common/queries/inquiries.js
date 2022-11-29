export const submitInquiry = async (data, url, token) => {
  const res = await fetch(url ? url : '/api/inquiries/', {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token ? token : ''}`,
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
  })
  const resData = await res.json()
  return resData
}

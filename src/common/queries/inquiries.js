import { getRequest, postRequest, deleteRequest } from '@common/lib/requests'

export const submitInquiry = async (body, url, token) => {
  const defaultUrl = '/api/inquiries/'
  const data = await postRequest(url ? url : defaultUrl, body, token)

  if (data.status !== 200) {
    return data
  }

  return data
}

export const inquiryExists = async (listingId, url, access, check) => {
  const defaultUrl = `/api/inquiries?listing=${listingId}`

  // TODO: Replace fetch with getRequest @iamalmiir
  const res = await fetch(url ? url : defaultUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
      CheckInquiry: check ? check : '',
      ListingId: listingId,
    },
  })

  if (res.status !== 200) {
    return res
  }

  const data = await res.json()
  return data
}

export const deleteInquiry = async (inquiryId, token, url) => {
  const defaultUrl = `/api/inquiries?inquiry=${inquiryId}`
  const data = await deleteRequest(url ? url : defaultUrl, token && token)

  if (data.status !== 200) {
    return data
  }

  return data
}

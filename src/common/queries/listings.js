export const pagination_url = `/api/listings/?page_size=6&page=${currentPage}`

export const fetchListings = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  return data
}

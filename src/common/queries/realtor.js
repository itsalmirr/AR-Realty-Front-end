export const getRealtorData = async (url, slug) => {
  const res = await fetch(url, {
    headers: {
      realtor: slug,
    },
    method: 'GET',
    redirect: 'follow',
  })
  const data = await res.json()
  return data
}

import axios from 'axios'

export const realtorslisting = async (url, slug) => {
  const { data } = await axios.get(url, {
    headers: {
      realtor: slug,
    },
  })
  return data
}

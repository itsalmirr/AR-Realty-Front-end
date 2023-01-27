import { API_URL } from '@lib/constants'
import { response } from '@lib/helpers'

const realtorslisting = async (req, res) => {
  if (req.method === 'GET') {
    const { slug } = req.query
    const realtorUrl = `${API_URL}/api/realtor/info/${slug}`

    try {
      const fetchRes = await fetch(realtorUrl, {
        method: 'GET',
        redirect: 'follow',
      })
      const data = await fetchRes.json()
      response(res, 200, true, 'Listings retrieved successfully', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default realtorslisting

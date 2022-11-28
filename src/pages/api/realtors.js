import { API_URL } from '@lib/constants'
import { response } from '@lib/helpers'

const realtorslisting = async (req, res) => {
  if (req.method === 'GET' && req.headers.realtor) {
    const { realtor } = req.headers
    const url = `${API_URL}/api/listings/realtor/`
    try {
      const fetchRes = await fetch(url, {
        headers: {
          realtor: realtor,
        },
        method: 'GET',
        redirect: 'follow',
      })
      const data = await fetchRes.json()
      response(res, 200, true, 'Listings retrieved successfully', data.results)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default realtorslisting

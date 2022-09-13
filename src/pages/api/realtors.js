import axios from 'axios'

import { API_URL } from '@lib/constants'
import { response } from '@lib/helpers'

const realtorslisting = async (req, res) => {
  if (req.method === 'GET' && req.headers.realtor) {
    const { realtor } = req.headers
    const url = `${API_URL}/api/listings/realtor/`
    try {
      const { data } = await axios.get(url, {
        headers: {
          realtor: realtor,
        },
      })
      response(res, 200, true, 'Listings retrieved successfully', data.results)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default realtorslisting
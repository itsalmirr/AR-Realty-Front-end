import axios from 'axios'

import { response } from '@lib/helpers'
import { API_URL } from '@lib/index'

const listing = async (req, res) => {
  if (req.method === 'GET' && req.query.slug) {
    const { slug } = req.query
    const url = `${API_URL}/api/properties/${slug}`

    try {
      const axiosResponse = await axios.get(url)
      response(
        res,
        200,
        true,
        'Listing retrieved successfully',
        axiosResponse.data
      )
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default listing

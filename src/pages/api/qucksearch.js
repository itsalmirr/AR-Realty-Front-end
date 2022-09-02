import axios from 'axios'

import { API_URL } from '@lib/constants'
import { response } from '@lib/helpers'

const quicksearch = async (req, res) => {
  if (req.method === 'GET' && req.query.q) {
    const { q } = req.query
    const url = `${API_URL}/api/listings/quicksearch?q=${q}`
    try {
      const axiosResponse = await axios.get(url)
      response(
        res,
        200,
        true,
        'Listings retrieved successfully',
        axiosResponse.data
      )
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default quicksearch

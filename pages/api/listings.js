import axios from 'axios'

import { API_URL } from '@lib/index'
import { response } from '@lib/helpers'

const listings = async (req, res) => {
  if (req.method === 'GET' && req.query.page) {
    const { page, offset } = req.query
    const offsetNum = offset ? offset : 6
    const url = `${API_URL}/api/properties/?page=${page}${
      page > 1 ? `&offset=${offsetNum}` : ''
    }`
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

export default listings

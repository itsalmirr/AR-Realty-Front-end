import axios from 'axios'

import { response } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const listing = async (req, res) => {
  if (req.method === 'GET' && req.query.slug) {
    const { slug } = req.query
    const url = `${API_URL}/api/listings/${slug}`

    try {
      const axiosResponse = await axios.get(url)
      console.log('axiosResponse', axiosResponse)
      response(
        res,
        200,
        true,
        'Listing retrieved successfully',
        axiosResponse.data
      )
    } catch (err) {
      console.log('err', err)
      response(res, 500, false, 'Server error')
    }
  }
}

export default listing

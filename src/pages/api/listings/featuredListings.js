import { API_URL } from '@lib/constants'
import { getRequest } from '@common/lib/requests'
import { response } from '@lib/helpers'

const featuredListings = async (req, res) => {
  if (req.method === 'GET') {
    const data = await getRequest(`${API_URL}/api/listings/random/`)
    response(res, 200, true, 'Featured listings retrieved successfully', data)
  }
}

export default featuredListings

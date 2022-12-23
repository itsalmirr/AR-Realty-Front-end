import { API_URL } from '@lib/constants'
import { getRequest } from '@lib/requests'
import { response } from '@lib/helpers'

const quicksearch = async (req, res) => {
  if (req.method === 'GET' && req.query.q) {
    const { q } = req.query
    const url = `${API_URL}/api/listings/quicksearch?q=${q}`
    try {
      const data = await getRequest(url)
      response(res, 200, true, 'Listings retrieved successfully', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default quicksearch

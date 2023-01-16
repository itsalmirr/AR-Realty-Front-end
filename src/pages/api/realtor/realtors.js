import { API_URL } from '@lib/constants'
import { response } from '@lib/helpers'
import { getRequest } from '@common/lib/requests'

const realtors = async (req, res) => {
  if (req.method === 'GET') {
    const url = `${API_URL}/api/realtors/`

    try {
      const data = await getRequest(url)
      response(res, 200, true, 'Listings retrieved successfully', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default realtors

import { API_URL } from '@lib/constants'
import { response } from '@lib/helpers'
import { getRequest } from '@common/lib/requests'

const realtorslisting = async (req, res) => {
  if (req.method === 'GET' && req.query.slug) {
    const { slug } = req.query

    const listingsUrl = `${API_URL}/api/realtor/listings/${slug}`

    try {
      const data = await getRequest(listingsUrl)

      response(res, 200, true, 'Listings retrieved successfully', data.results)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default realtorslisting

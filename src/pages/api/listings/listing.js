import { response } from '@lib/helpers'
import { API_URL } from '@lib/constants'

const listing = async (req, res) => {
  if (req.method === 'GET' && req.query.slug) {
    const { slug } = req.query
    const url = `${API_URL}/api/listings/${slug}`

    try {
      const fetchRes = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
      })
      const data = await fetchRes.json()
      response(res, 200, true, 'Listing retrieved successfully', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default listing

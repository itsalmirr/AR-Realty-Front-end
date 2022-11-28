import { API_URL } from '@lib/constants'
import { response } from '@lib/helpers'

const listings = async (req, res) => {
  if (req.method === 'GET' && req.query.page) {
    const { page, offset } = req.query
    const offsetNum = offset ? offset : 6
    const url = `${API_URL}/api/listings/?page=${page}${
      page > 1 ? `&offset=${offsetNum}` : ''
    }`

    try {
      const fetchRes = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
      })
      const data = await fetchRes.json()
      response(res, 200, true, 'Listings retrieved successfully', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default listings

import { API_URL } from '@lib/constants'
import { response } from '@lib/helpers'

const listings = async (req, res) => {
  if (req.method === 'GET' && req.query.page) {
    const { page } = req.query
    const url = `${API_URL}/api/listings/?page=${page}`

    try {
      const fetchRes = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
      })

      if (!fetchRes.ok) {
        throw new Error('Something went wrong')
      }

      const data = await fetchRes.json()
      response(res, 200, true, 'Listings retrieved successfully', data)
    } catch (err) {
      response(res, 500, false, 'Server error')
    }
  }
}

export default listings

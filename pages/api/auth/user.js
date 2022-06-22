import axios from 'axios'

import { API_URL } from '@lib/index'
import { response, parseCookie } from '@lib/helpers'

const user = async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      return res.end()
    }

    try {
      const cookie = parseCookie(req)
      if (cookie.access) {
        const { access } = cookie
        const { data } = await axios.get(`${API_URL}/api/user/me`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        })
        response(res, 200, true, 'Login successful', data)
      }
    } catch (err) {
      response(res, 401, false, 'Unauthorized')
    }
  }

  response(res, 405, false, 'Method not allowed')
}

export default user

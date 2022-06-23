import axios from 'axios'

import { API_URL } from '@lib/index'
import { response, parseCookie, removeCookies } from '@lib/helpers'

const user = async (req, res) => {
  if (req.method === 'GET') {
    if (!req.headers.cookie) {
      return res.end()
    }

    try {
      const cookie = parseCookie(req)
      const { access } = cookie
      const { data } = await axios.get(`${API_URL}/api/user/me`, {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })

      response(res, 200, true, 'User is logged in', data)
    } catch (err) {
      removeCookies(res)
      response(res, 401, false, 'Unauthorized')
    }
  }
}

export default user
